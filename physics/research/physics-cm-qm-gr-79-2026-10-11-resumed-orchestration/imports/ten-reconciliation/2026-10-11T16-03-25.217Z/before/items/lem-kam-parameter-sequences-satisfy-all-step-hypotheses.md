---
id: lem-kam-parameter-sequences-satisfy-all-step-hypotheses
kind: lemma
title: "The KAM parameter sequence: every step satisfies the smallness, truncation, parameter and contraction hypotheses"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-kam-generator-flow-and-remainder-bound, lem-frequency-reparametrization-by-contraction, lem-cauchy-fourier-and-lattice-shell-bounds, thm-geometric-series, def-interval]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-kam-generator-flow-and-remainder-bound: mathematical-premise
  lem-frequency-reparametrization-by-contraction: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §4-§5 (the sequences $r_j=2^{-j}r$, $s_{j+1}=s_j-5\\sigma_j$, $K_j=4^jK$, $h_j=4^{-j}h$, $E_{j+1}=CE_j^{3/2}$, and the verification $K_j\\sigma_j\\ge1$, $h_j\\le\\alpha/(2K_j^{\\tau+1})$, $\\sigma_j^{-n}e^{-K_j\\sigma_j}\\le E_j$; existence of the simultaneous choices of $K_0,E_0$), PDF pp. 20-27."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §6.1-§6.2 (choice of the geometric sequences of strips and truncations, and the quadratic-convergence bookkeeping), printed pp. 92-106."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, $\tau>n-1$, $\mu:=\tau+3n+2$, $\alpha>0$, $s_0>0$, and let
$C\ge1$ and $C_*\ge3C2^{\mu}$ be constants (in the applications, $C$ bounds the
constants of [[lem-kam-generator-flow-and-remainder-bound]] and
[[lem-frequency-reparametrization-by-contraction]], and $C_*$ is the sequence
factor). Fix widths $0<\sigma_0\le\min(1,s_0/20)$, $0<r_0\le1$, $K_0\ge1$ and
numbers $h_0>0$, $E_0>0$ satisfying

1. $E_0\le\min(c^2,\,c,\,\sigma_0^2,\,(16C_*^2)^{-1})$, where $c=c(n,\tau)\in(0,1]$
   is the step constant of [[lem-kam-generator-flow-and-remainder-bound]] (so
   that $E_0\le c$ implies the step hypotheses hold with constant $E_0$ in place
   of $E$, once the other displayed inequalities hold);
2. $K_0\sigma_0\ge\max\bigl(1,\ |\log(C_*^2E_0)|+n\log(1/\sigma_0)+2\log C_*+n\log2+1\bigr)$;
3. $\max\bigl(16nCE_0,\ (\alpha/c)E_0\sigma_0^{\mu}\bigr)\le h_0\le\min\bigl(1,\ \alpha/(2K_0^{\tau+1})\bigr)$
   (in particular the interval is required to be nonempty).

Define, for every integer $j\ge0$,
$$\sigma_j:=\sigma_02^{-j},\qquad K_j:=K_04^{j},\qquad h_j:=h_04^{-j},\qquad s_j:=s_0-5\sum_{i<j}\sigma_i,$$
$$E_{j+1}:=C_*E_j^{3/2},\qquad \eta_j:=\sqrt{E_j},\qquad r_{j+1}:=\eta_jr_j,\qquad \varepsilon_j:=\alpha E_jr_j\sigma_j^{\mu}.$$
Then for every $j\ge0$:

(a) $0<r_j\le1$, $0<\sigma_j\le1$, $K_j\sigma_j\ge1$, $0<h_j\le1$, $s_0/2\le s_j$ and
    $\sigma_{j+1}\le s_j/8$;
(b) $E_j\le c\,\eta_j$ and $E_j\le4^{-j}E_0$;
(c) $\varepsilon_j\le c\,\alpha\eta_jr_j\sigma_j^{\mu}$ and $\varepsilon_j\le c\,h_jr_j$;
(d) $h_j\le\alpha/(2K_j^{\tau+1})$;
(e) $\sigma_j^{-n}e^{-K_j\sigma_j/2}\le E_j$;
(f) $CE_j\le h_j/(16n)$ (so that [[lem-frequency-reparametrization-by-contraction]]
    applies at every step with $B:=CE_j$);
(g) the following sums converge with the displayed bounds:
$$\sum_{j\ge0}(r_j+\sigma_j)E_j\le4(r_0+\sigma_0)E_0,\qquad \sum_{j\ge0}E_j\le2E_0,\qquad \sum_{j\ge0}2^{j}E_j\le2E_0,\qquad \sum_{j\ge0}\frac{\varepsilon_j}{r_jh_j}\le\frac43\,\frac{\alpha E_0\sigma_0^{\mu}}{h_0}.$$

## Facts & Assumptions

**Given:** The exponents and constants $n\ge2$, $\tau>n-1$, $\mu=\tau+3n+2$,
$\alpha>0$, the widths $\sigma_0,r_0$, the truncation $K_0$, the parameter width
$h_0$, the initial error $E_0$, the constants $c,C,C_*$, and the sequences
defined above.

[F1] The step hypotheses of [[lem-kam-generator-flow-and-remainder-bound]]: for
widths $r,s,h>0$, $0<\sigma\le\min(1,s/8)$, $0<\eta\le1/8$, $K\ge0$ with
$K\sigma\ge1$, $h\le\alpha/(2K^{\tau+1})$, $\eta\le\sigma$, and a perturbation
$P$ with $|P|_{r,s,h}\le\varepsilon$ and
$E:=\varepsilon/(\alpha r\sigma^{\mu})\le c$, the one-step construction applies
with all the conclusions of that item; and the smallness conditions used there
are exactly of the forms $\varepsilon\le c\alpha\eta r\sigma^{\mu}$ and
$\varepsilon\le chr$.

[F2] The contraction hypothesis of
[[lem-frequency-reparametrization-by-contraction]]: if $B\le h/(16n)$ then the
frequency retraction $\phi$ exists with $|\phi-\mathrm{id}|\le B$ and
$h\|D\phi-I_n\|\le(16n/7)B$.

[F3] Elementary estimates: $2^{j}\ge1+j$ and $2^{j}\ge(3/2)^{j}$ for $j\ge0$;
$\sum_{j\ge0}2^{-j}=2$ and $\sum_{j\ge0}4^{-j}=4/3$
([[thm-geometric-series]], [[def-interval]]).

[F4] The closed form of the quadratic recursion: with
$A:=C_*^2E_0$ one has $E_j=A^{(3/2)^j}/C_*^2$ for every $j\ge0$, hence
$\log E_j=(3/2)^j\log A-2\log C_*$ and, when $0<A\le1/16$,
$$\log E_j\ge-(3/2)^j|\log A|-2\log C_* .$$
Indeed the identity is checked by induction from $E_{j+1}=C_*E_j^{3/2}$
([[def-holomorphic-kam-domain-and-diophantine-labels]] notations only).

## Proof

**Proof technique:** direct; verify each displayed hypothesis of the one-step and contraction lemmas by induction and elementary estimates.

1.1 *Monotone decay and smallness of $E_j$.* From $E_{j+1}=C_*E_j^{3/2}$ and $E_0\le(16C_*^2)^{-1}$ we get $E_1=C_*E_0^{3/2}\le E_0/(4\sqrt{E_0}C_*)\cdot\ldots$ more directly, $E_1\le E_0/4$ because $E_1/E_0=C_*\sqrt{E_0}\le1/4$; and if $E_j\le4^{-j}E_0$ then $E_{j+1}=C_*E_j^{3/2}\le C_*E_j\sqrt{4^{-j}E_0}\le C_*4^{-j}E_0\sqrt{E_0}\le4^{-(j+1)}E_0$, since $4C_*\sqrt{E_0}\le1$. So $E_j\le4^{-j}E_0$ and $E_j\le E_0\le c^2$ for all $j$, which is clause (b) because $E_j\le c\eta_j$ is equivalent to $\sqrt{E_j}\le c$. Also $2^jE_j\le E_0$ and $\sigma_j^{-1}=2^{j}\sigma_0^{-1}$ for later use. [given, F3, F4, algebra]

1.2 *Geometry of the widths.* $r_0\le1$ and $\eta_j\le1$ give $0<r_j\le1$; $\sigma_j\le\sigma_0\le1$; $K_j\sigma_j=K_04^j\sigma_02^{-j}=K_0\sigma_02^{j}\ge1$; $h_j\le h_0\le1$; and $s_j\ge s_0-5\sigma_0(1+1/2+\dots)=s_0-10\sigma_0\ge s_0/2$ because $\sigma_0\le s_0/20$, whence $\sigma_{j+1}\le\sigma_0\le s_0/20\le s_j/8$ when $s_j\ge s_0/2$. This is clause (a). [given, F3, algebra]

2.1 *Step smallness.* By step 1.1, $\varepsilon_j=\alpha E_jr_j\sigma_j^{\mu}\le c\alpha\eta_jr_j\sigma_j^{\mu}$, which is the first part of clause (c) and is exactly the smallness form [F1] requires at every step. For the second, $h_0\ge(\alpha/c)E_0\sigma_0^{\mu}$ gives $ch_jr_j=c h_04^{-j}r_j\ge\alpha E_0\sigma_0^{\mu}r_j$ and $\varepsilon_j=\alpha E_jr_j\sigma_j^{\mu}\le\alpha E_0r_j\sigma_0^{\mu}2^{-\mu j}\le\alpha E_0r_j\sigma_0^{\mu}$, so $\varepsilon_j\le ch_jr_j$. This is clause (c). [step 1.1, F1, given, algebra]

2.2 *Truncation and parameter conditions.* Clause (d): $h_j\le h_04^{-j}\le[\alpha/(2K_0^{\tau+1})]4^{-j}\le\alpha/(2K_0^{\tau+1}4^{j(\tau+1)})=\alpha/(2K_j^{\tau+1})$ since $\tau+1\ge1$. Clause (f): $h_j=h_04^{-j}\ge16nCE_04^{-j}\ge16nCE_j$ by step 1.1, i.e. $CE_j\le h_j/(16n)$, which is the contraction hypothesis [F2] with $B:=CE_j$. Clause (e): by [F4] and step 1.1, $\log E_j\ge-(3/2)^j|\log A|-2\log C_*$; the hypothesis on $K_0\sigma_0$ gives $K_0\sigma_02^{j}\ge n\log2\cdot j+n\log(1/\sigma_0)+2\log C_*+(3/2)^j|\log A|+1$ for every $j\ge0$, because $2^j\ge1+j\ge j$ and $2^j\ge(3/2)^j$ absorb the two middle terms; hence $\log(\sigma_j^{-n}e^{-K_j\sigma_j/2})=n\log(1/\sigma_j)-K_j\sigma_j/2=n\log(1/\sigma_0)+n\log2\cdot j-K_0\sigma_02^{j}/2\le-\log E_j$ up to the additive constant $1/2$, which gives $\sigma_j^{-n}e^{-K_j\sigma_j/2}\le E_j$ for all $j$ (the estimate is conservative by the factor $e^{-1/2}$). This is clauses (d), (e), (f). [step 1.1, F2, F3, F4, algebra]

3.1 *Sums.* By step 1.1 and [F3], $\sum_j(r_j+\sigma_j)E_j\le2\sum_j\sigma_jE_0\cdot2^{-j}(1+1)\le4\sigma_0E_0\sum_j2^{-2j}\cdot\ldots$ more carefully, $r_j+\sigma_j\le2\sigma_0 2^{-j}$ and $E_j\le E_0$, so the first sum is at most $2\sigma_0E_0\sum_j2^{-j}=4\sigma_0E_0\le4(r_0+\sigma_0)E_0$; similarly $\sum_jE_j\le E_0\sum_j4^{-j}=\frac43E_0\le2E_0$ and $\sum_j2^{j}E_j\le E_0\sum_j2^{-j}=2E_0$. For the last sum, $\varepsilon_j/(r_jh_j)=\alpha E_j\sigma_j^{\mu}/h_j=(\alpha E_j\sigma_0^{\mu}/h_0)2^{(2-\mu)j}\le(\alpha E_0\sigma_0^{\mu}/h_0)2^{(2-\mu)j}$ with $\mu\ge4$, so the sum is at most $(\alpha E_0\sigma_0^{\mu}/h_0)\sum_j2^{(2-\mu)j}\le\frac43(\alpha E_0\sigma_0^{\mu}/h_0)$. This is clause (g). [step 1.1, step 1.2, F3, algebra] ∎

## Remarks

- **Why these sequences.** The factor $4$ in $K_j$ and $2$ in $\sigma_j^{-1}$ make $K_j\sigma_j$ grow, so the Fourier tail $\sigma_j^{-n}e^{-K_j\sigma_j/2}$ is summable against the quadratically decreasing errors; the simultaneous choice of $K_0,E_0$ is the content of condition 2 and is always possible by taking $E_0$ small and then $K_0$ proportional to $|\log E_0|/\sigma_0$.
- **The interval for $h_0$.** Condition 3 is the only place where the parameter width is fixed; the upper bound is the Diophantine-survival condition at every scale, the lower bounds keep the contraction and the step smallness valid.
