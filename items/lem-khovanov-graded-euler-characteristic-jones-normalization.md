---
id: lem-khovanov-graded-euler-characteristic-jones-normalization
kind: lemma
title: "The graded Euler characteristics have the Jones normalization"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - alg-khovanov-chain-complex-from-diagram
  - def-reduced-khovanov-cohomology-of-a-knot
  - lem-khovanov-cube-differential-squares-to-zero
  - def-cochain-complex-in-an-abelian-category
  - thm-khovanov-chain-complex-from-diagram-procedure-properties
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§2.2–2.4 and 7.1–7.2"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial, Algebraic & Geometric Topology 2 (2002), §§2–3"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, arXiv:1107.1524v2 (2022), §§3–4"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §§3.5–3.7"
      url: "https://arxiv.org/pdf/2501.03115v1"
---

## Statement

Let $D$ be a nonempty finite regular oriented diagram of a link with $n_+$ positive crossings, $n_-$ negative crossings, writhe $w=n_+-n_-$, and $n=n_++n_-$. For each resolution state $v$, let $k(v)$ be its number of circles and let $D_v$ use the A-smoothing at coordinates $0$ and B-smoothing at coordinates $1$. Put $\delta=-A^2-A^{-2}$ and define the normalized bracket
$$f_D(A):=(-A^3)^{-w}\sum_{v:C(D)\to\{0,1\}} A^{n-2|v|}\delta^{k(v)-1}.$$
For the unreduced cohomology, define $\chi_q(Kh(D))=\sum_{i,j}(-1)^i\operatorname{rank}_{\mathbb Z}Kh^{i,j}(D)q^j$. If $D$ is a finite regular oriented diagram of a knot with a basepoint $p$ away from all crossings, define its reduced rank Euler characteristic using the reduced quantum grading $\widetilde j$ by $\widetilde\chi_q(D,p)=\sum_{i,\widetilde j}(-1)^i\operatorname{rank}_{\mathbb Z}\widetilde{Kh}^{i,\widetilde j}(D,p)q^{\widetilde j}$. Under $q=-A^{-2}$ and $t=q^2=A^{-4}$,
$$\chi_q(Kh(D))=(q+q^{-1})f_D(A),\qquad \widetilde\chi_q(D,p)=f_D(A).$$
Thus the unreduced unknot factor is $q+q^{-1}$ and the reduced unknot factor is $1$.

## Statement references

[[def-kauffman-bracket-smoothing-and-loop-value|Bracket smoothing weights and loop value]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Crossing signs and writhe]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Khovanov state-module and grading conventions]]

[[alg-khovanov-chain-complex-from-diagram|State complex construction]]

[[def-reduced-khovanov-cohomology-of-a-knot|Reduced quotient and quantum shift]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§2.2–2.4 and 7.1–7.2](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §§2–3](https://arxiv.org/pdf/math/0201043)

[Kauffman, *An Introduction to Khovanov Homology* (2022), §§3–4](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

[Zhang, *Notes on Khovanov homology* (2025), §§3.5–3.7](https://arxiv.org/pdf/2501.03115v1)

## Facts & Assumptions
**Given:** A nonempty finite oriented link diagram $D$, its ordered Khovanov state cube, and, when $D$ is a based knot diagram, its reduced cochain complex.

[F1] The Kauffman state sum is $\langle D\rangle=\sum_v A^{n-2|v|}(-A^2-A^{-2})^{k(v)-1}$, with each state using the prescribed A/B smoothing chart ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F2] The writhe is the sum of crossing signs, so $w=n_+-n_-$ ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F3] A state with circle labels $1,X$ has cohomological degree $i=|v|-n_-$ and quantum degree $j=|v|+n_+-2n_-+\sum\deg(a)$; $\deg(1)=1$, $\deg(X)=-1$, and edge maps preserve $j$ ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]).

[F4] The reduced state module kills the based-circle $X$ label and subtracts one from the original quantum degree, so the surviving based label $1$ contributes degree zero ([[def-reduced-khovanov-cohomology-of-a-knot]]).

[F5] The Khovanov procedure returns a bounded bigraded cochain complex with finite-rank free state groups ([[thm-khovanov-chain-complex-from-diagram-procedure-properties]]).

## Proof

1.1 Fix a quantum degree and tensor the finite free complex with $\mathbb Q$. For an integer matrix $d$, the kernel after tensoring is $(\ker d)\otimes\mathbb Q$: if $d(a/r)=0$ with $a$ integral and $r\ne0$, then $d(a)=0$ because the target is torsion-free. The image after tensoring is $\operatorname{im}(d)\otimes\mathbb Q$ by clearing denominators, so rationalized homology is $H^i(C)\otimes\mathbb Q$ and has dimension $\operatorname{rank}_{\mathbb Z}H^i(C)$. Rank-nullity in this bounded rational complex gives $\dim C^i=\dim H^i+\dim\operatorname{im}d^i+\dim\operatorname{im}d^{i-1}$; alternating over $i$ cancels the image dimensions. The same argument applies to the reduced complex, whose terms are finite-rank free. [F5, given, algebra]

2.1 On a state $v$, summing $q^{\sum\deg(a)}$ over its $k(v)$ independent labels gives $(q+q^{-1})^{k(v)}$, so the unreduced chain Euler sum is $\sum_v(-1)^{|v|-n_-}q^{|v|+n_+-2n_-}(q+q^{-1})^{k(v)}$. With $q=-A^{-2}$, one has $q+q^{-1}=\delta$ and, term by term, $(-1)^{|v|-n_-}q^{|v|+n_+-2n_-}A^{-(n-2|v|)}=(-A^3)^{-w}$. The state contribution is consequently $(q+q^{-1})(-A^3)^{-w}A^{n-2|v|}\delta^{k(v)-1}$. For the reduced cube, the based label contributes degree zero by [F4], leaving $(q+q^{-1})^{k(v)-1}$ in place of $(q+q^{-1})^{k(v)}$, so its state contribution is $(-A^3)^{-w}A^{n-2|v|}\delta^{k(v)-1}$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Summing the state contributions in step 2.1 gives the two displayed formulas for the chain Euler sums. Step 1.1 identifies those sums with the Euler characteristics of integral cohomology. When $D$ is the crossingless unknot, $n_+=n_-=0$ and $k=1$, so the unreduced value is $q+q^{-1}$ and the reduced value is $1$. [step 1.1, step 2.1, algebra] ∎
