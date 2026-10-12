---
id: lem-standard-fock-vectors-expand-in-the-upper-global-basis
kind: lemma
title: "Standard Fock vectors expand in the upper global basis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 22
deps: [def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       def-upper-global-basis-by-the-contravariant-form,
       thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible,
       thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention,
       def-axiom-of-choice,
       def-symmetric-group-level-one-residue-and-partition-label-convention,
       thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations,
       def-level-one-partition-fock-space-and-node-residues]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 3.8-3.10, printed pp. 21-25: dual-canonical, quasi-canonical and canonical bases (3.33)-(3.46); Section 5.1-5.7 printed pp. 45-57: Theorems 5.1-5.19, the localization of the upper basis and the graded decomposition numbers. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 8.1-8.5, printed pp. 33-39: Fock space (8.11)-(8.18), standard monomials, Shapovalov form and canonical bases (8.21); Section 9.1-9.5, printed pp. 39-46: categorification of f and V(Lambda), Theorem 9.5 and Corollary 9.7. Complete passages read."
verification:
  precheck: pass
---

## Statement

Use the symmetric model $M_\mu=|\mu'\rangle$ of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]], the
basic field subspace $V$ of the vacuum Fock space spanned by the restricted
lower vectors $G(\lambda)=\sum_\mu d_{(\lambda,\mu)}(q)M_\mu$ of
[[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]],
and the bilinear form $B(M_\mu,M_\nu)=\delta_{\mu,\nu}$. Define the **standard
coordinate functional** $\operatorname{Std}_\mu$ in the restricted integral
weight dual of the lower lattice by
$\operatorname{Std}_\mu(x)=B(x,M_\mu)$. The restriction of $B$ to $V$ is
nondegenerate; identify its field dual with $V$ via $B$ and denote by
$\pi(M_\mu)$ the vector representing $\operatorname{Std}_\mu$, equivalently the
$B$-orthogonal projection of $M_\mu$ onto $V$. This is the definition of $\pi$
used below, not an undeclared projection from a generic upper-basis definition.
If $G^*(\lambda)$ is the $B$-dual upper vector, then
$$\operatorname{Std}_\mu=\pi(M_\mu)=\sum_{\lambda\ \mathrm{restricted}} d_{(\lambda,\mu)}(q)\,G^*(\lambda).$$
At each content the restricted $\operatorname{Std}_\lambda$ form an $A$-basis of
the upper dual lattice, by the restricted dominance-unitriangular coefficient
minor. The full family of raw $M_\mu$ is the basis of the ambient standard
lattice; the full projected family $\operatorname{Std}_\mu$ is generally
redundant. The projection $\pi$ need not land in the lower integral lattice. In
$e=2$ one has $G_{11}=M_{11}+qM_2$ and
$G_{11}^*=(M_{11}+qM_2)/(1+q^2)$, exhibiting the possible field denominator.
The sums at fixed content are finite. Choice is inherited only from the
declared global-basis suppliers.

## Facts & Assumptions

**Given:** The symmetric level-one model with its partition labels, node
residues and Fock form, the restricted lower vectors $G(\lambda)$ and their
transition polynomials, the ambient standard basis $M_\mu$, and the lower and
upper global bases of the ambient module with their duality.

[F1] The symmetric model $J M_\mu=|\mu'\rangle$, its node residues, the
weight $\operatorname{wt}(M_\mu)=\Lambda_0-\sum_im_i(\mu)\alpha_i$ and the
ambient orthonormal standard pairing $B(M_\mu,M_\nu)=\delta_{\mu\nu}$ are those
of [[def-symmetric-group-level-one-residue-and-partition-label-convention]],
[[def-level-one-partition-fock-space-and-node-residues]] and
[[thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations]].

[F2] The restricted lower vectors expand as $G(\lambda)=\sum_\mu d_{(\lambda,\mu)}(q)M_\mu$, with diagonal coefficient $1$, off-diagonal coefficients in $q\mathbb Z[q]$, and support only when $\mu$ strictly dominates $\lambda$ off the diagonal ([[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]], [[thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis]]).

[F3] On the basic subspace, the ambient orthonormal form restricts to the normalized highest-weight contravariant form, and its inverse-Gram dual family $G^*(\lambda)$ is therefore exactly the transported upper global basis. It is an $A$-basis of the restricted integral weight dual, with $B(G(\lambda),G^*(\lambda'))=\delta_{\lambda\lambda'}$. This form identification and ambient-coordinate construction are proved in [[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]], step 4.2; the abstract upper duality and charts are [[def-upper-global-basis-by-the-contravariant-form]] and [[thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]].

[F4] The empty component is the $e$-restricted component and the restricted
labels are exactly its vertices
([[thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention]]).

[C1] The Axiom of Choice is declared in [[def-axiom-of-choice]] and is used
here only through the inherited global-basis existence and duality suppliers of
[F3]; the pairing and projection computations are finite-dimensional linear
algebra over $\mathbb Q(q)$ and use no new choice.

## Proof

**Proof technique:** direct.

1.1 **The restricted coefficient matrix is dominance-unitriangular.** Fix a content, and take the square minor $D_{\mathrm{res}}$ with rows and columns the restricted labels and row-$\mu$, column-$\lambda$ entry $d_{(\lambda,\mu)}$. By [F2], the diagonal is $1$ and the only off-diagonal support has $\mu$ strictly dominating $\lambda$. Choose a finite linear order refining this dominance direction; then $D_{\mathrm{res}}=I+N$ is triangular with nilpotent $N$ and coefficients in $\mathbb Z[q]$, and $(I+N)^{-1}=\sum_{k\ge0}(-N)^k$ is a finite polynomial matrix. In particular $\det D_{\mathrm{res}}=1$ and the minor is invertible over $A$. [F2, F4]

2.1 **The restricted form is nondegenerate.** Let $D$ be the rectangular matrix with all standard rows and restricted lower columns on the fixed content. The Gram matrix is $H=D^{\mathsf t}D$ by [F1]. By [F2] its columns at $q=0$ are distinct coordinate vectors, so $H(0)=I$ and $\det H(0)=1$. Thus $H$ is invertible over $\mathbb Q(q)$; the form on the basic subspace is nondegenerate and identifies its field dual with that subspace. [F1, F2, step 1.1, algebra]

3.1 **The standard functional and its representing vector.** For $x=\sum_\lambda a_\lambda G(\lambda)\in V$, the definition of the transition coefficients gives $\operatorname{Std}_\mu(x)=B(x,M_\mu)=\sum_\lambda a_\lambda d_{(\lambda,\mu)}$, a finite sum over the labels of the content, with values in $A$ whenever $x$ lies in the lower $A$-lattice [F1, F2]. By step 2.1 the functional $\operatorname{Std}_\mu$ on $V$ is represented by a unique vector $\pi(M_\mu)\in V$, characterized by $B(\pi(M_\mu),x)=\operatorname{Std}_\mu(x)$ for all $x\in V$; equivalently $B(x,\pi(M_\mu))=B(x,M_\mu)$ for all $x\in V$, so $M_\mu-\pi(M_\mu)$ is $B$-orthogonal to $V$ and $\pi$ is the orthogonal projection along $V^\perp$ in the ambient space. [step 2.1, algebra]

4.1 **Expansion in the dual upper vectors.** Put $v:=\sum_{\lambda}d_{(\lambda,\mu)}G^*(\lambda)$, a finite sum over the restricted labels of the content [F3]. Using the duality $B(G(\lambda),G^*(\lambda'))=\delta_{\lambda\lambda'}$ from [F3] and step 3.1, for every restricted $\lambda'$ $$B(v,G(\lambda'))=\sum_\lambda d_{(\lambda,\mu)}B(G^*(\lambda),G(\lambda'))=d_{(\lambda',\mu)}=\operatorname{Std}_\mu(G(\lambda')),$$ and both sides are bilinear in their arguments, so $B(v,x)=\operatorname{Std}_\mu(x)$ for all $x\in V$. By uniqueness in step 3.1, $v=\pi(M_\mu)$, which is the displayed expansion. [F3, step 1.1, step 2.1, step 3.1]

5.1 **Upper dual basis and the failure of lower integrality.** The matrix expressing the restricted family $\{\operatorname{Std}_\lambda\}$ in the restricted dual family $\{G^*(\lambda)\}$ is the transpose of $D_{\mathrm{res}}$ of step 1.1, hence unitriangular over $A$ with unit diagonal; therefore the restricted $\operatorname{Std}_\lambda$ form an $A$-basis of the upper dual lattice and the full ambient family may be redundant [F2, F3]. The coefficients $d_{(\lambda,\mu)}$ are Laurent polynomials, but $\pi$ need not preserve the lower integral lattice: in $e=2$, at the content of the two-part partition $2$, the recorded transition data give $G_{11}=M_{11}+qM_2$, whose dual-form upper vector is $G^*_{11}=(M_{11}+qM_2)/(1+q^2)$ and hence $\operatorname{Std}_{11}=\pi(M_{11})=(M_{11}+qM_2)/(1+q^2)$ has the genuine field denominator $1+q^2$, which is not a unit of $A$; the raw standard vector $M_{11}$ is nevertheless an ambient lattice basis vector. [F2, F3, step 4.1]

6.1 **The canonical recursion, finiteness and Choice.** All sums at fixed content are finite. The form identification of [F3] gives $B(F_ix,y)=B(x,q^{-1}K_iE_iy)$, and both $V$ and $V^\perp$ are stable under the quantum action: for $x\in V^\perp$ and $y\in V$, contravariance gives $B(ux,y)=B(x,\sigma(u)y)=0$. Hence the orthogonal projection $\pi$ commutes with the action. In the symmetric linear-$J$ model, conjugating the QG diagram changes lower-content nodes to above nodes and reflects colors; the transported removal formula is therefore $E_iM_\mu=\sum_{A\ \mathrm{removable}}q^{-d^A(\mu)}M_{\mu\setminus A}$, where $d^A$ is the addable-minus-removable count strictly above $A$ in the smaller diagram. Applying $\pi$ gives the same recursion for $\operatorname{Std}_\mu$, as used by the later Specht comparison. No new choice is made; [C1] is inherited. [F1, F3, C1, step 3.1] ∎