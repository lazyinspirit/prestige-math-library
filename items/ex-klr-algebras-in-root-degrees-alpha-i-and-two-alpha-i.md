---
id: ex-klr-algebras-in-root-degrees-alpha-i-and-two-alpha-i
kind: example
title: "The KLR algebras in root degrees $\\alpha_i$ and $2\\alpha_i$"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum, def-klr-grading-and-diagrammatic-composition, thm-klr-pbw-basis-theorem, def-divided-power-klr-idempotents-and-projectives, lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases, def-the-klr-cartan-pairing]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: '§2.2, Examples 2 and 3, printed pp. 10-15: $R(i)=k[x_1]$; $R(mi)\cong NH_m$ with the listed relations; §2.5, printed p. 28: the minimal idempotents.'
    - title: 'Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, Bulletin of the AMS 47 (2010) 419-481 (survey), arXiv:0909.4844'
      url: 'https://arxiv.org/pdf/0909.4844'
      locator: '§2.6, Theorem 2.5 relations (2.14)-(2.24), printed pp. 10-11, and §2.11, printed pp. 21-23: the same specializations in the type-A affine presentation, including $\psi_r^2e(i)=0$ when $i_r=i_{r+1}$.'
---

## Example

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] and fix $i\in I$.
(a) In weight $\alpha_i$ there is one sequence, and $R(\alpha_i)=k[x_1]e(i)$: the only relations are that $x_1$ is central, so $\{x_1^a\}_{a\ge0}$ is a $k$-basis, $\deg x_1=2d_i$, and $\mathrm{gdim}\,R(\alpha_i)=(1-q^{2d_i})^{-1}$. The algebra is commutative; up to shift its unique graded simple module is $k$ with $x_1$ acting by $0$, $R(\alpha_i)$ is the projective cover of that simple, and $[R(\alpha_i)]=[P_{i,1}]$ with $([P_{i,1}],[P_{i,1}])=(1-q^{2d_i})^{-1}$.
(b) In weight $2\alpha_i$ one has $R(2\alpha_i)\cong NH_2$, the nil Hecke algebra of rank $2$, with $k$-basis $\{x_1^ax_2^b,\ x_1^ax_2^b\tau_1\}_{a,b\ge0}$, free of rank $2$ over $k[x_1,x_2]$, and relations (in the normalization of relation (6) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]])
$$\tau_1^2=0,\qquad \tau_1x_1=x_2\tau_1+e(ii),\qquad \tau_1x_2=x_1\tau_1-e(ii).$$
Its graded dimension is $\dfrac{1+q^{-2d_i}}{(1-q^{2d_i})^2}$, and the element $e_{i,2}=x_1\tau_1$ is a nonzero idempotent of degree $0$ with $P_{i,2}=R(2\alpha_i)\psi(e_{i,2})\{-d_i\}$ an indecomposable projective of class $[P_{i,2}]=\gamma(\theta_i^{(2)})$ in $K_0(R)$.

## Facts & Assumptions

**Given:** A KLR datum $Q$ and $i\in I$, the PBW basis of [[thm-klr-pbw-basis-theorem]], the idempotents and divided-power projectives of [[def-divided-power-klr-idempotents-and-projectives]], and the Krull-Schmidt/covers of [[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]].

[F1] PBW basis ([[thm-klr-pbw-basis-theorem]]): the monomials $\tau_wx_1^{a_1}\cdots x_n^{a_n}e(\nu)$ form a $k$-basis, and the degree of a monomial is the sum of its dot and crossing degrees.

[F2] Divided powers ([[def-divided-power-klr-idempotents-and-projectives]]): $e_{i,n}=x_1^{n-1}\cdots x_{n-1}\partial_{w_0}$ is a nonzero idempotent of degree $0$, $P_{i,n}=R(n\alpha_i)\psi(e_{i,n})\{-d_i\binom n2\}$ is the unique indecomposable projective summand up to shift, and $[P_{i,n}]=\gamma(\theta_i^{(n)})$ by [[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]], clause (iii).

[F3] Krull-Schmidt and covers ([[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]]): finite graded modules over $R(\alpha_i)$ decompose uniquely and the cover/simple Hom pairing is computed as in [[def-the-klr-cartan-pairing]].

## Verification

**Proof technique:** direct computation in the two lowest weights.

1.1 (a) In weight $\alpha_i$ the only sequence is $(i)$, and there are no crossings, so the presentation reduces to the single generator $x_1$ with relation (2) $x_1e(i)=e(i)x_1$; hence $R(\alpha_i)=k[x_1]e(i)$ with basis $\{x_1^a\}$, $\deg x_1=2d_i$ by [[def-klr-grading-and-diagrammatic-composition]], and $\mathrm{gdim}R(\alpha_i)=\sum_{a\ge0}q^{2d_ia}=(1-q^{2d_i})^{-1}$. A graded simple is cyclic and bounded below; the positive-degree central $x_1$ cannot act bijectively on it, so simplicity forces $x_1S=0$. Thus its unique graded simple is $k=R(\alpha_i)/(x_1)$ up to shift; $R(\alpha_i)$ is free of rank one over itself, hence projective, indecomposable (its endomorphism ring is $k[x_1]$, whose only idempotents are $0,1$), and its quotient onto $k$ is a graded projective cover: if a graded submodule $U$ satisfies $U+(x_1)=R$, comparison in degree zero gives $1\in U$, hence $U=R$; the pairing value is the normalization of [[def-the-klr-cartan-pairing]]: $P_i^\psi\otimes_{R(\alpha_i)}P_i\cong k[x_1]$ as a graded space. [given, F1, F3, algebra]

1.2 (b) In weight $2\alpha_i$ there is one sequence $(ii)$ and one crossing $\tau_1$, with relations (4) and (6) specialized to $Q_{ii}=0$: $\tau_1^2=0$ and, on the equal-colour component, $\tau_1x_1=x_2\tau_1+e(ii)$, $\tau_1x_2=x_1\tau_1-e(ii)$. The PBW basis [F1] is $\{x_1^ax_2^b,\ x_1^ax_2^b\tau_1\}_{a,b\ge0}$, which is free of rank $2$ over $k[x_1,x_2]$; the graded dimension is the sum of the two geometric series $\frac1{(1-q^{2d_i})^2}+\frac{q^{-2d_i}}{(1-q^{2d_i})^2}=\frac{1+q^{-2d_i}}{(1-q^{2d_i})^2}$ because $\tau_1$ has degree $-b_{ii}=-2d_i$. For the idempotent: $e_{i,2}^2=x_1\tau_1x_1\tau_1=x_1(x_2\tau_1+e(ii))\tau_1=x_1x_2\tau_1^2+x_1\tau_1=x_1\tau_1=e_{i,2}$ using $\tau_1^2=0$, and $e_{i,2}\ne0$ by the PBW basis; its degree is $2d_i+(-2d_i)=0$. [given, F1, algebra]

2.1 (b, continued) By [F2] with $n=2$ the element $e_{i,2}=x_1\tau_1$ is the divided-power idempotent, $P_{i,2}=R(2\alpha_i)\psi(e_{i,2})\{-d_i\}$ is the unique indecomposable projective summand up to shift, and $[P_{i,2}]=\gamma(\theta_i^{(2)})$; the shift here is $-\binom22d_i=-d_i$. [step 1.2, F2, algebra] ∎
