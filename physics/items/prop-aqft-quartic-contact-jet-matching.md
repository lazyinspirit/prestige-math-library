---
id: prop-aqft-quartic-contact-jet-matching
kind: proposition
title: Quartic scalar contact jets descend through verified operator relations
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 3
deps:
  - def-aqft-local-operator-and-dimension
  - def-aqft-operator-basis-quotient
  - def-aqft-truncated-amplitude-bootstrap-problem
dependency_roles:
  def-aqft-local-operator-and-dimension: mathematical-premise
  def-aqft-operator-basis-quotient: mathematical-premise
  def-aqft-truncated-amplitude-bootstrap-problem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in effective theories at higher orders
      url: https://arxiv.org/pdf/1811.09413
      locator: Section 2, equations (2.2)–(2.8), PDF pp. 7–9; Appendix B, PDF pp. 33–34, distinguishes one from multiple EOM insertions. The finite polynomial contact construction is proved locally.
verification:
  precheck: pass
---

## Statement

Fix $m>0$, $\Lambda>0$, integers $r\ge1$, $D\ge4$ and $N\ge1$, and the metric $\eta=\operatorname{diag}(-1,1,1,1)$. Use the finite-jet operator quotient $\mathcal Q_D=V_D/R_D$ for one commuting scalar $\phi$ of weight one, field-degree cutoff four, derivative cutoff $r$, and complex orthogonal spacetime-index action preserving $\eta$. Let $U_D\subset V_D$ be the subspace of degree-exactly-four scalar polynomials whose indices are contracted using $\eta$ only, and let $Q_D^{(4)}$ be its image in $\mathcal Q_D$. Thus $Q_D^{(4)}=U_D/(U_D\cap R_D)$; operators outside this image are not assigned a contact map. Fix the monomial basis in the commuting jet generators used to write these polynomials. Let $U_{D,\mathbb R}\subset U_D$ consist of the polynomials whose coefficients in that basis are real, and define $Q_{D,\mathbb R}^{(4)}$ to be the image of $U_{D,\mathbb R}$ in $Q_D^{(4)}$. This is the chosen real subspace of classes admitting a coefficientwise-real representative; no conjugation structure on the full complex quotient is presumed.

Require the following certificate for the actual declared relations: every $H\in U_D\cap R_D$ is a finite sum of identically zero jet polynomials, total divergences $\partial_\mu J^\mu$ with $J$ quartic, and $F(\Box-m^2)\phi$ with $F$ cubic, where $\Box=\eta^{\mu\nu}\partial_\mu\partial_\nu$. The summands may use a larger finite jet space and different engineering weights; their polynomial sum must equal $H$ before any on-shell substitution. This is an additional restriction on the selected $R_D$, not a claim about an arbitrary relation subspace or its completeness.

For $O\in U_D$ introduce commuting indeterminates $z_1,\ldots,z_4$ and complex four-vectors $k_1,\ldots,k_4$. Its polarized Fourier vertex is

$$T_O(k_1,k_2,k_3,k_4)=[z_1z_2z_3z_4]\,O\!\left(\partial_{\mu_1}\cdots\partial_{\mu_a}\phi\mapsto\sum_{j=1}^4 z_j i^a k_{j,\mu_1}\cdots k_{j,\mu_a}\right).$$

The coefficient convention contains no $1/4!$. Impose $\sum_jk_j=0$, $k_j^2=-m^2$, and set $s=-(k_1+k_2)^2$, $t=-(k_1+k_3)^2$, $u=-(k_1+k_4)^2$. Replace contracted products by $k_j^2=-m^2$, $k_1\cdot k_2=k_3\cdot k_4=m^2-s/2$, $k_1\cdot k_3=k_2\cdot k_4=m^2-t/2$, and $k_1\cdot k_4=k_2\cdot k_3=m^2-u/2$. Put $t=0$, $s=2m^2+v$, $u=2m^2-v$, obtaining a polynomial $t_O(v)$. Define $\nu_0=2m^2$ and the linear contact-jet map

$$M_{D,N}([O])_k=\nu_0^{2k+2}\Lambda^{4-D}[v^{2k+2}]t_O(v),\qquad 0\le k\le N.$$

Then this map $Q_D^{(4)}\to\mathbb C^{N+1}$ is well-defined and $t_O$ is even. Its restriction to $Q_{D,\mathbb R}^{(4)}$ takes values in $\mathbb R^{N+1}$. For $D=8$, $O_8=(\partial_\mu\phi\,\partial^\mu\phi)^2$ satisfies, for every $C_8\in\mathbb R$,

$$t_{O_8}(v)=8m^4+4v^2,\qquad M_{8,N}([C_8O_8])=(4\nu_0^2C_8/\Lambda^4,0,\ldots,0).$$

In particular the coefficient $[v^2]\Lambda^{-4}t_{C_8O_8}=4C_8/\Lambda^4$ is invariant under the certified relations. On $Q_{D,\mathbb R}^{(4)}$, the real target coordinates use precisely the normalized convention of the finite forward-amplitude bootstrap problem. This algebraic map describes one quartic contact insertion about the free massive scalar quadratic action. It does not equate the contact polynomial to an exact full amplitude, discard loop or other-operator contributions, or infer positivity of a perturbative term from positivity of a full amplitude.

## Statement references

[[def-aqft-local-operator-and-dimension]]

[[def-aqft-operator-basis-quotient]]

[[def-aqft-truncated-amplitude-bootstrap-problem]]

[Criado and Pérez-Victoria, §2 and Appendix B](https://arxiv.org/pdf/1811.09413)

## Facts & Assumptions

**Given:** The fixed finite-jet model, the actual declared relation certificate, and the polarized vertex and coordinate conventions in the statement.

[F1] [[def-aqft-local-operator-and-dimension]]: commuting scalar jets form a polynomial algebra; field degree, derivative cutoff and weight specify finite-dimensional subspaces.

[F2] [[def-aqft-operator-basis-quotient]]: two representatives in $V_D$ have the same class exactly when their difference belongs to the declared $R_D$; no physical completeness of that subspace is asserted.

[F3] [[def-aqft-truncated-amplitude-bootstrap-problem]]: the normalized coordinate for a forward Taylor coefficient $c_{k+1}$ is $b_k=\nu_0^{2k+2}c_{k+1}$.

[A1] Every relation in $U_D\cap R_D$ has the finite polynomial decomposition specified in the statement. This certificate must be checked for the relation space in each application.

## Proof

1.1 Substitution in the displayed finite jet polynomial and extraction of one coefficient are linear in $O$. Every contraction is a product of pairwise dot products, so the stated on-shell replacement yields a polynomial in $s,t,u$, then in $v$. This replacement is independent of polynomial presentation: for real $s>4m^2$, take $k_1=(E,0,0,p)$, $k_2=(E,0,0,-p)$, $k_3=-k_1$, $k_4=-k_2$, with $E=\sqrt{s}/2$ and $p=\sqrt{s/4-m^2}$. These realize all the replacement rules at $t=0$. A zero jet-polynomial identity therefore gives a polynomial in $v$ vanishing on the interval $v>2m^2$, and hence identically zero. Indeed successive division by distinct linear factors shows a nonzero degree-$d$ polynomial has at most $d$ roots. [given, F1, algebra]

1.2 Formal differentiation of the substituted polynomial multiplies each degree-four coefficient by $i\sum_j k_{j,\mu}$: the product rule sums the four momenta, including when a differentiated factor is itself a jet. Thus a total divergence has zero polarized vertex on $\sum_jk_j=0$. For $F(\Box-m^2)\phi$, extracting $z_1z_2z_3z_4$ assigns some external leg $j$ to the last factor, whose multiplier is $-k_j^2-m^2=0$ on shell; summing its four possible assignments still gives zero. Identically zero polynomials vanish by substitution. These arguments apply to each finite summand in A1, irrespective of its intermediate weight or jet cutoff. [given, A1, algebra]

2.1 Polarization is invariant under permutation of the four pairs $(z_j,k_j)$. Interchanging $k_2$ and $k_4$ exchanges $s$ with $u$ and leaves $t$ fixed; hence $t_O(-v)=t_O(v)$. A contracted quartic monomial has an even total number of derivative indices, so its Fourier factor is an even power of $i$ and is real. Thus real coefficients give a real polynomial after the real dot-product replacement. [given, step 1.1, algebra]

2.2 By A1 and step 1.2, each $H\in U_D\cap R_D$ has zero on-shell vertex. For every real $s>4m^2$, the forward momenta in step 1.1 realize the stated replacement rules at $t=0$, so $t_H(v)=0$ for every real $v>2m^2$. Since $t_H$ is a polynomial, it is identically zero. By F2, the kernel of $U_D\to\mathcal Q_D$ is exactly $U_D\cap R_D$. Therefore $[O]\mapsto t_O$ and its scaled coefficient map descend to its image $Q_D^{(4)}$. This proves well-definedness without identifying the entire kernel of the amplitude map with the declared relations. [A1, F2, step 1.1, step 1.2, algebra]

3.1 For $O_8$, each of the three unordered pairings of four legs occurs $2!\,2!\,2!=8$ times in the polarization. Four derivatives give $i^4=1$, so $T_{O_8}=8\sum_{\rm pairings}(k_i\cdot k_j)(k_l\cdot k_h)=2[(s-2m^2)^2+(t-2m^2)^2+(u-2m^2)^2]$. Forward substitution gives $t_{O_8}=8m^4+4v^2$. Multiplication by $C_8/\Lambda^4$ and coefficient extraction give the displayed vector by F3, with every higher even coefficient zero. [given, F3, step 2.2, algebra] ∎

## Remarks

For an exact even pole-subtracted amplitude $B$, any use of this contact result must also supply the matching remainder $R(v)=B(v)-\Lambda^{4-D}t_O(v)$ near zero. The exact coordinates then satisfy $b_k=M_{D,N}([O])_k+\nu_0^{2k+2}[v^{2k+2}]R(v)$. This identity retains all omitted contributions. A polynomial contact term growing like $v^2$ need not itself satisfy the dispersive high-energy hypotheses. Multiple insertions and interacting leading equations require their own matching calculation or the stronger regulator, Jacobian, source and stable-LSZ hypotheses of a field-redefinition theorem.
