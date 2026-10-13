---
id: cex-gr-symmetries-do-not-imply-bianchi
kind: counterexample
title: "The exchange symmetries of a curvature-like tensor do not imply the first Bianchi identity"
status: published
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-curvature-algebraic-symmetries, def-gr-tensor-fields-and-components, lem-gr-algebraic-curvature-vanishing-criterion, def-gr-smooth-lorentzian-objects]
dependency_roles:
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  lem-gr-algebraic-curvature-vanishing-criterion: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the Riemann symmetries (3.78)-(3.83) and the counting of independent components, printed pp. 79-81 (PDF pp. 86-88)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.4: the symmetries and the first Bianchi identity R_{sigma[rho mu nu]} = 0, printed pp. 130-131 (PDF pp. 137-138)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---
## Statement refuted

Statement refuted: "Let $M$ be a smooth four-manifold with a global chart and
let $T$ be a smooth $(0,4)$-tensor field on $M$ whose components satisfy, at
every point,
$$T_{abcd}=-T_{bacd},\qquad T_{abcd}=-T_{abdc},\qquad T_{abcd}=T_{cdab}$$
for all $a,b,c,d$ — the skew-symmetries and the exchange of the two index
pairs of [[thm-gr-curvature-algebraic-symmetries]] clauses (a)-(b). Then $T$
also satisfies the first Bianchi identity $T_{abcd}+T_{acdb}+T_{adbc}=0$ of
clause (c)."

## Facts & Assumptions

**Given:** The smooth four-manifold $M=\mathbb R^4$ with the identity chart $x=(x^0,x^1,x^2,x^3)$ and the flat Lorentzian metric $g=\operatorname{diag}(-1,1,1,1)$ with time orientation $N=\partial_0$ ([[def-gr-smooth-lorentzian-objects]]).

[L1] For the curvature tensor of a metric-selected connection the identities $R_{abcd}=-R_{bacd}$, $R_{abcd}=-R_{abdc}$, $R_{abcd}=R_{cdab}$ and $R_{abcd}+R_{acdb}+R_{adbc}=0$ all hold; the displayed implicational statement above asserts only the first three for an arbitrary tensor field ([[thm-gr-curvature-algebraic-symmetries]] clauses (a)-(c)).

[L2] A smooth tensor field of type $(0,4)$ on $M$ is determined by its component functions in the maximal atlas, and a family of component functions that is $C^\infty$ in every chart — in particular a family that is constant in the global identity chart — defines a smooth $(0,4)$-tensor field ([[def-gr-tensor-fields-and-components]] clauses (b)-(c)).

[L3] An algebraic curvature tensor at a point is defined to satisfy the four identities of [L1] together, the Bianchi identity included ([[lem-gr-algebraic-curvature-vanishing-criterion]]).

## Counterexample

In the identity chart define the constant component families
$$\omega_{01}=\omega_{23}:=1,\qquad \omega_{10}=\omega_{32}:=-1,\qquad \omega_{ab}:=0\ \text{ otherwise},$$
and
$$T_{abcd}:=\omega_{ab}\,\omega_{cd}.$$
By [L2] these constants define a smooth $(0,2)$-tensor field $\omega$ and a
smooth $(0,4)$-tensor field $T$ on $M$.

1.1 (The skew-symmetries.) Since $\omega_{ab}=-\omega_{ba}$ for all $a,b$, $T_{abcd}=\omega_{ab}\omega_{cd}=-\omega_{ba}\omega_{cd}=-T_{bacd}$ and $T_{abcd}=-\omega_{ab}\omega_{dc}=-T_{abdc}$: the first two identities of the statement hold everywhere. [L2, construct, algebra]

1.2 (Exchange of the pairs.) Since multiplication of real numbers is commutative, $T_{cdab}=\omega_{cd}\omega_{ab}=\omega_{ab}\omega_{cd}=T_{abcd}$: the third identity holds everywhere. [L2, algebra]

2.1 (The Bianchi sum does not vanish.) For $(a,b,c,d)=(0,1,2,3)$ the sum of the statement is $T_{0123}+T_{0231}+T_{0312}$. The components are $T_{0123}=\omega_{01}\omega_{23}=1\cdot1=1$, $T_{0231}=\omega_{02}\omega_{31}=0\cdot0=0$ and $T_{0312}=\omega_{03}\omega_{12}=0\cdot0=0$. Hence $T_{0123}+T_{0231}+T_{0312}=1\neq0$ at every point of $M$: $T$ violates the first Bianchi identity. [L2, step 1.2, algebra]

3.1 (Conclusion.) Steps 1.1 and 1.2 show that $T$ satisfies the two skew-symmetries and the pair exchange, and step 2.1 shows that it does not satisfy the Bianchi identity. Therefore the displayed statement is refuted: the exchange symmetries alone do not imply the Bianchi identity, which is an independent condition and is imposed separately in the definition of an algebraic curvature tensor [L3]. In particular, by clause (c) of [L1] no metric-selected connection on $M$ has $T$ as its curvature tensor. [step 1.1, step 1.2, step 2.1, L1, L3, algebra] ∎

## Remarks

- **Why the example works.** The tensor is defined directly by
  $T_{abcd}=\omega_{ab}\omega_{cd}$ for the two-form
  $\omega=dx^0\wedge dx^1+dx^2\wedge dx^3$; no Kulkarni-Nomizu construction
  is involved. The three exchange identities are immediate from the
  skew-symmetry of $\omega$, while the Bianchi sum for $(0,1,2,3)$ receives
  the single term $\omega_{01}\omega_{23}$ that the other two orderings of
  the indices miss.
  The example is the promised companion of the independence remark in
  [[thm-gr-curvature-algebraic-symmetries]].
- **What is not claimed.** The counterexample is algebraic: it refutes the
  implication, not the Bianchi identity for curvature tensors; that identity
  is a theorem of this page ([[thm-gr-curvature-algebraic-symmetries]] clause
  (c)). No claim is made that $T$ arises geometrically, and no count of
  independent components is asserted.
