---
id: cex-morrey-endpoint-p-equals-n-fails
kind: counterexample
title: "Morrey's inequality has no $p=n$ endpoint"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [thm-morrey-inequality-for-p-greater-than-n, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure, thm-local-smooth-approximation-in-wkp, thm-sobolev-chain-rule-for-c-one-lipschitz-compositions, thm-holder-inequality-for-integrals, thm-tonelli-and-fubini-for-completed-product-measures, cor-vector-valued-ftc-and-lipschitz-bound, lem-classical-derivatives-are-weak-derivatives, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.2, Remark 3.16(1), printed p. 73."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.7, Example 3.30 and the limiting-case remark preceding it, printed p. 66."
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge2$ and let $B=B(0,1)$. There are no constants $\alpha>0$ and $C$ with
$$[u]_{C^{0,\alpha}(B)}\le C\|u\|_{W^{1,n}(B)}\qquad\text{for every }u\in W^{1,n}(B);$$
that is, Morrey's inequality has no endpoint at $p=n$. The witness is
$$f(x)=\log\log\Bigl(1+\frac1{|x|}\Bigr)\quad(x\in B\setminus\{0\}),\qquad f(0)=0,$$
which lies in $W^{1,n}(B)$ but has no bounded representative. The hypothesis $p>n$ in Morrey's inequality is therefore essential.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge2$; the unit ball $B=B(0,1)$; and the function $f:B\to\mathbb R$ defined by $f(x)=\log\log(1+1/|x|)$ for $x\ne0$ and $f(0)=0$.

[F1] Polar coordinates: for nonnegative Borel $h$, $\int_Bh\,d\lambda_n=\int_0^1\int_{S^{n-1}}h(r\omega)r^{n-1}d\sigma(\omega)dr$ with $0<\sigma(S^{n-1})<\infty$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]]).

[F2] $W^{1,n}(B)$ consists of the $L^n$ classes whose first weak derivatives exist as $L^n$ classes; $L^n$ consists of almost-everywhere classes ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] Holder's inequality with conjugate exponents on $\mathbb R$ and Tonelli's theorem ([[thm-holder-inequality-for-integrals]]); a function with finite global $\alpha$-Holder seminorm on the bounded ball is bounded, since fixing $y_0\in B$ gives $|v(x)|\le|v(y_0)|+[v]_{C^{0,\alpha}(B)}\operatorname{diam}(B)^\alpha$.

[F5] Countable Choice is assumed; the fundamental theorem ([[cor-vector-valued-ftc-and-lipschitz-bound]]) gives integration by parts on smooth one-dimensional sections, and Fubini ([[thm-tonelli-and-fubini-for-completed-product-measures]]) integrates those identities. Classical smooth derivatives are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

## Counterexample

**Proof technique:** direct.

1.1 Membership in $W^{1,n}$. Off the origin $f$ is smooth and radial with $$|Df(x)|=\frac{1}{|x|(|x|+1)\log(1+1/|x|)}.$$ For $0<r=|x|\le\frac12$, this is at most $1/(r\log(1/r))$, so polar coordinates [F1] give $$\int_{B(0,1/2)}|Df|^n\,dx\le\sigma(S^{n-1})\int_0^{1/2}\frac{dr}{r(\log(1/r))^n}=\sigma(S^{n-1})\int_{\log2}^{\infty}s^{-n}\,ds<\infty,$$ where $s=\log(1/r)$ and $n\ge2$. On $1/2\le r<1$, the exact derivative is bounded by $4/(3\log2)$, since $r\ge1/2$, $r+1\ge3/2$, and $\log(1+1/r)\ge\log2$; hence its $n$th-power polar integral on this annulus is finite as well. Also $\int_B|f|^n\,dx<\infty$: near $0$, $\log\log(1+1/r)=O(r^{-1/2})$, so the radial $L^n$ majorant is $O(r^{n/2-1})$, which is integrable for $n\ge2$, and $f$ is bounded on $1/2\le r<1$. To identify the weak gradient, fix a test $\varphi\in C_c^\infty(B)$ and a coordinate $i$. For every transverse coordinate other than the zero vector, the coordinate line avoids the origin; its intersection with $B$ is an interval on which $f$ is smooth, and $\varphi$ vanishes near the endpoints. The fundamental theorem applied to $f\varphi$ gives $\int f\partial_i\varphi=-\int (\partial_i f)\varphi$ on that line. The omitted transverse singleton is null because $n-1\ge1$; both integrands are globally integrable since $f,Df\in L^n(B)\subseteq L^1(B)$. Fubini [F5] therefore integrates the section identities into the weak derivative identity. Thus $Df$ is the weak gradient and $f\in W^{1,n}(B)$ by [F2]. [F1, F2, F4, F5, given, algebra]

1.2 No bounded representative. For every $M>0$ the set $\{x\in B\setminus\{0\}:f(x)>M\}$ is a punctured neighbourhood of $0$ (since $f(x)\to+\infty$ as $x\to0$) and has positive measure; hence if a measurable $g$ equals $f$ almost everywhere on $B$, then for every $\varepsilon>0$ the set $\{x\in B(0,\varepsilon):g(x)>M\}$ has positive measure, so $g$ is unbounded on every neighbourhood of $0$. In particular no representative of $f$ is bounded, and a fortiori none is uniformly continuous or Holder on $B$. [F2, given, algebra]

2.1 Failure of every Holder bound. Suppose there were $\alpha>0$ and $C$ with $[u]_{C^{0,\alpha}(B)}\le C\|u\|_{W^{1,n}(B)}$ for every $u\in W^{1,n}(B)$. Applying this to the class of $f$ would produce a representative $f^{*}$ with $|f^{*}(x)-f^{*}(y)|\le C\|f\|_{W^{1,n}}|x-y|^{\alpha}$ for all $x,y\in B$; such an $f^{*}$ is continuous and bounded on the bounded set $B$. But $f^{*}$ is a representative of $f$, contradicting step 1.2. Hence no such constants exist, Morrey's inequality has no $p=n$ endpoint, and the hypothesis $p>n$ in [[thm-morrey-inequality-for-p-greater-than-n]] is essential. [F4, step 1.1, step 1.2, given, algebra] ∎


## Source notes

The witness is Hunter's Example 3.30 and Kinnunen's Remark 3.16(1), printed at p. 66 and p. 73: the double logarithm is the borderline function whose gradient just fails to be $L^n$-integrable when $\log\log$ is replaced by $\log$. The computation above records membership in $W^{1,n}$ by splitting at $r=1/2$: the logarithmic majorant is integrated only near the origin, and the exact derivative is bounded on the remaining annulus. It also records the absence of any bounded representative; the contradiction with a hypothetical Holder bound is then immediate because Holder functions on a bounded domain are bounded.
