---
id: ex-certified-sine-near-a-multiple-of-pi
kind: example
title: Certified sine range near a multiple of pi
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic-examples
dependency_level: 13
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [alg-certified-elementary-range-evaluation, alg-budgeted-validated-range-evaluation, thm-real-elementary-range-enclosures, thm-budgeted-range-evaluation-terminates-and-is-sound, lem-trigonometric-identities-machin-and-range-reduction, lem-range-reduced-exp-log-and-arctan-series-enclosures, lem-continuous-functions-riemann-integrable]
sources:
  references:
    - title: "Rump, Rigorous and Portable Standard Functions, §7"
      url: "https://www.tuhh.de/ti3/paper/rump/Ru01b.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §7"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Example

Use truncation index $N=12$ (13 retained terms) and the finite format
$p=128$, $e_{\min}=-512$, $e_{\max}=512$. Form the Machin interval $P$
from exact rational partial
sums and the alternating-series tail bounds, and round only its final two
endpoints outward. The formula in the trigonometric lemma gives
$$
\operatorname{width}(P)\le
\frac{32(1/5)^{27}}{27(1-1/25)}+
\frac{8(1/239)^{27}}{27(1-1/239^2)}+2\cdot2^{-126}<10^{-18}.
$$
Let $X=2P$, request width $\varepsilon=1$, and use total box-split budget
$B=0$. The certified sine evaluator uses the canonical cell $k=4$ and the
range reduction centered at $2\pi$.

## Facts & Assumptions

**Given:** The exact-rational Machin interval $P$, the interval $X=2P$, the
128-bit dyadic format, $N=12$, $\varepsilon=1$, and $B=0$.

[L1] [[lem-range-reduced-exp-log-and-arctan-series-enclosures]]: for
$t\in[0,1/2]$, the series through index $N$ has error at most
$t^{2N+3}/((2N+3)(1-t^2))$.

[L2] [[lem-trigonometric-identities-machin-and-range-reduction]]: Machin's
identity is exact, and a sine Taylor polynomial on a reduced interval plus
its explicit tail encloses the exact sine range.

[L3] [[thm-budgeted-range-evaluation-terminates-and-is-sound]]: a returned
`certified` enclosure contains the exact range and meets the requested width.

[L4] [[lem-continuous-functions-riemann-integrable]]: if a continuous
integrand lies between constants $m$ and $M$ on a forward interval of length
$d$, its integral lies between $md$ and $Md$.

## Verification

1.1 Apply [L1] at $1/5$ and $1/239$ with $N=12$. The arctangent interval
widths are at most twice the displayed tails; multiplying by $16$ and $4$
gives the two rational terms in the bound. By [L4], the integral gives
$13/20\le\arctan1\le9/10<1$: its integrand is at least $4/5$ on
$[0,1/2]$ and at least $1/2$ on $[1/2,1]$, while it is at most $1$ on the
first half and at most $4/5$ on the second. Thus
$13/5\le\pi\le18/5<4$. Before rounding, the Machin interval has width less
than $2\cdot10^{-19}+10^{-30}$ by the tail estimates below, so its exact
endpoints lie in $[5/2,37/10]$ using $13/5\le\pi\le18/5$. The directed
conversions stay in that interval and therefore each add at
most $2^{-126}$ to the width. For the first tail,
$32(1/5)^{27}/(27(1-1/25))=800/(648\cdot5^{27})<2\cdot10^{-19}$, using
$4000\cdot10^{18}<648\cdot5^{27}$. The second tail is less than
$239^{-27}<16^{-27}=2^{-108}<10^{-30}$. Therefore exact rational comparison gives
$W:=\operatorname{width}(P)<10^{-18}$ and $\pi\in P$.
[given, L1, L2, L4, algebra]

1.2 Each $x\in X$ has form $x=2p$ with $p\in P$, so
$|x-2\pi|=2|p-\pi|\le2W<2\cdot10^{-18}<\inf(P)/4\le\pi/4$;
$\inf(P)\ge5/2$ by step 1.1. Thus $X$ lies inside the canonical $k=4$ cell. If
$P=[p_-,p_+]$, the neighboring cell enclosures end at $7p_+/4$ and begin at
$9p_-/4$. Since $p_->2$ and $W<10^{-18}$, $p_->8W$ and $p_->7W$, so exact
comparison shows that $X=2P$ meets neither neighbor; the candidate list
contains only $k=4$; all farther cells are separated as well because their
endpoints are monotone in the integer cell index. The interval residual computed by the evaluator is
$R=X-4(P/2)=[-2W,2W]$, which contains each exact reduced argument and lies
inside the certified Taylor range. [step 1.1, L2, algebra]

2.1 Put $r_0=2W<2\cdot10^{-18}$. Bound each odd Taylor term on
$R=[-r_0,r_0]$ by the symmetric exact rational interval
$[-r_0^{2k+1}/(2k+1)!,r_0^{2k+1}/(2k+1)!]$, sum these intervals exactly,
and add the geometric tail before outward conversion. The polynomial interval
has total width at most
$2\sum_{k=0}^{12}r_0^{2k+1}/(2k+1)!\le2r_0/(1-r_0^2)<6\cdot10^{-18}$,
since $r_0^2<1/3$ gives $(1-r_0^2)^{-1}<3/2$.
Since $r_0<1/2$, the displayed tail formula gives
$T_s<2r_0^{27}/27!<2r_0^2<10^{-18}$, so the symmetric tail width is below
$2\cdot10^{-18}$. Only four directed endpoint conversions occur in this
exact-rational path (two for $P$ and two for the sine enclosure); their total
width increase is at most $4\cdot2^{-126}$, below the conservative allowance
$200\cdot2^{-126}$. The total width is therefore below $1$. With $B=0$, the
budgeted evaluator checks this finite
enclosure and returns `certified`; [L3] confirms the exact range and width
claim. No system sine routine is used. [step 1.2, given, L2, L3, algebra] ∎
