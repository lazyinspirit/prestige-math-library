---
id: lem-qftx-brst-nilpotence-doublets
kind: lemma
title: Nilpotence and contraction of nonminimal doublets
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qftx-abelian-local-brst
justified_by: []
dependency_roles:
  def-qftx-abelian-local-brst: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: Glenn Barnich, Friedemann Brandt and Marc Henneaux, Local BRST cohomology in gauge theories
      url: https://arxiv.org/pdf/hep-th/0002245
      locator: Section 2.7, Appendix 2.B, equations (2.48)–(2.50) and the following contracting-homotopy argument.
    - title: Norbert Dragon and Friedemann Brandt, BRST Symmetry and Cohomology
      url: https://arxiv.org/pdf/1205.3293
      locator: Section 3.1, equations (3.1)–(3.14), the basic homotopy lemma for nilpotent graded derivations.
---

## Statement

The Abelian jet derivation $s$ defined in the local BRST algebra satisfies $s^2=0$. More generally, take any finite set of jet doublets $u^j,v^j$ with $|v^j|=|u^j|+1\pmod 2$, $\operatorname{gh}(v^j)=\operatorname{gh}(u^j)+1$, $su^j=v^j$, and $sv^j=0$, and suppose the transformations of all other generators are independent of these doublets. Define the doublet-number operator
$$N=\sum_j\left(u^j\frac{\partial_L}{\partial u^j}+v^j\frac{\partial_L}{\partial v^j}\right)$$
and the odd homotopy $h=\sum_j u^j\frac{\partial_L}{\partial v^j}$, using left graded derivatives. Then $[N,s]=0$ and $sh+hs=N$. Consequently the inclusion of the doublet-independent polynomial subalgebra induces an isomorphism on polynomial BRST cohomology. In particular, if $sa_k=0$ and $Na_k=ka_k$ for a positive integer $k$, then $a_k=s(ha_k/k)$.

For a ghost-number grading, write this cohomology as
$$H^r(s,\mathcal P)=\ker(s:\mathcal P^r\to\mathcal P^{r+1})/\operatorname{im}(s:\mathcal P^{r-1}\to\mathcal P^r).$$

## Statement references

[[def-qftx-abelian-local-brst]]

## Doublet diagram

For one fixed jet index, the arrows record the differential on the pair: $s(u^j)=v^j$ and $s(v^j)=0$. The zero at the right is the zero element. The proof verifies nilpotence and the homotopy identity algebraically; the diagram is only a record of the generator maps.

```tikzcd
u^j \arrow[r,"s"] & v^j \arrow[r,"s"] & 0
```

## Facts & Assumptions

**Given:** The algebra and odd graded derivation in [[def-qftx-abelian-local-brst]].

[F1] [[def-qftx-abelian-local-brst]]: $\mathcal P$ is a graded-commutative finite-jet polynomial algebra; $s$ is odd, raises ghost number by one, obeys the graded Leibniz rule, and commutes with spacetime derivatives. Its generator values are $sa_\mu=\partial_\mu c_{\mathrm{gh}}$, $sc_{\mathrm{gh}}=0$, $s\bar c=B$, $sB=0$, and $s\psi=igc_{\mathrm{gh}}\psi$.

[A1] For a finite chosen family of additional jet pairs, $su^j=v^j$ and $sv^j=0$, with opposite parity and ghost number increased by one, and the $s$-transformations of all other generators do not involve $u^j$ or $v^j$.

## Proof

**Given:** [F1] and [A1].

1.1 On the gauge and nonminimal generators, $s^2a_\mu=s(\partial_\mu c_{\mathrm{gh}})=\partial_\mu(sc_{\mathrm{gh}})=0$, $s^2c_{\mathrm{gh}}=0$, $s^2\bar c=sB=0$, and $s^2B=0$. Commutation of $s$ with spacetime derivatives gives the same equality on every jet of these generators. [given, F1, algebra]

1.2 Since $c_{\mathrm{gh}}$ is odd in a graded-commutative algebra over $\mathbb C$, $c_{\mathrm{gh}}^2=-c_{\mathrm{gh}}^2$ and hence $c_{\mathrm{gh}}^2=0$. The graded Leibniz rule therefore gives
$$s^2\psi=s(igc_{\mathrm{gh}}\psi)=-igc_{\mathrm{gh}}(igc_{\mathrm{gh}}\psi)=g^2c_{\mathrm{gh}}^2\psi=0.$$
[given, F1, algebra]

2.1 The square of an odd derivation is an even derivation: the two mixed terms in $s^2(XY)$ cancel by the graded Leibniz rule. It vanishes on every generator and every jet by steps 1.1–1.2, so it vanishes on each finite polynomial in $\mathcal P$. [step 1.1, step 1.2, algebra]

3.1 Now $s^2=0$ by step 2.1, so $s$ is a differential. It preserves the number of the selected doublet variables: its action on the other generators is independent of them, and each term $v^j\partial_L/\partial u^j$ replaces one $u^j$ by one $v^j$. Thus $[N,s]=0$. On each pair, $hu^j=0$, $hv^j=u^j$, $su^j=v^j$, and $sv^j=0$, so $(sh+hs)u^j=u^j$ and $(sh+hs)v^j=v^j$. Both $sh+hs$ and $N$ are even derivations and vanish on the doublet-independent generators; equality on generators proves $sh+hs=N$ on the polynomial algebra. [A1, step 2.1, algebra]

4.1 Let $a_k$ be $s$-closed and homogeneous of doublet number $k>0$. Since $[N,s]=0$, the homogeneous components of any $s$-closed polynomial are separately $s$-closed. Applying $sh+hs=N$ to $a_k$ gives $s(ha_k)=ka_k$ because $sa_k=0$; division by the nonzero integer $k$ yields $a_k=s(ha_k/k)$. [step 3.1, algebra]

5.1 Every polynomial has a finite decomposition $a=\sum_{k\ge0}a_k$. For an $s$-closed $a$, step 4.1 makes every $a_k$ with $k>0$ exact, while $a_0$ is closed by $[N,s]=0$. Therefore every extended cohomology class has a representative in the doublet-independent subalgebra. [step 3.1, step 4.1, algebra]

6.1 If a doublet-independent closed polynomial $a_0$ is $s b$ in the extended algebra, take the doublet-number-zero component $b_0$ of the finite decomposition of $b$. Because $s$ preserves $N$, the number-zero component of $sb=a_0$ is $s b_0=a_0$. Thus a class from the minimal subalgebra becomes exact in the extension only if it was already exact there, proving injectivity as well as the surjectivity in step 5.1. [step 3.1, step 5.1, algebra] ∎

