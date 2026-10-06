---
id: lem-dominant-characters-of-products-of-tori-and-split-semisimple-groups-arise-as-primitive-weights
kind: lemma
title: "Dominant characters of a torus times a split semisimple group are primitive weights"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 34
deps: [def-axiom-of-choice, def-borel-subgroup-and-maximal-torus, def-group-of-multiplicative-type-and-torus, def-primitive-vector-of-a-rational-representation, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-root-datum-of-a-split-reductive-group, def-split-reductive-algebraic-group, def-weight-and-dominant-weight-of-a-rational-representation, lem-character-and-cocharacter-lattices-of-a-split-torus, lem-dominant-characters-of-split-semisimple-groups-arise-as-primitive-weights, lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces, lem-tensor-products-of-primitive-vectors]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22 (22.20) proof and (22.26) final paragraph, printed pp. 469-471; Ch. 12 (12.12)"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Theorem 39(e) (product construction)"
---
## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $Z$ be a
split torus over $k$ and let $G_0$ be a split semisimple group over $k$; put
$G=Z\times G_0$ with the product Borel pair. Let
$\lambda=\lambda_Z+\lambda_0\in X(Z)\oplus X(T_0)$ be dominant for the product
([[def-group-of-multiplicative-type-and-torus]],
[[def-split-reductive-algebraic-group]]). Then there is a rational
representation of $G$ containing a primitive vector of weight $\lambda$; if
$\lambda_0$ is dominant this is obtained by tensoring the one-dimensional
representation of $Z$ of weight $\lambda_Z$ with a representation of $G_0$
carrying a primitive vector of weight $\lambda_0$
([[lem-dominant-characters-of-split-semisimple-groups-arise-as-primitive-weights]],
[[lem-tensor-products-of-primitive-vectors]]).

## Facts & Assumptions

**Given:** AC; a split torus $Z$ with character lattice $X(Z)$, a split
semisimple group $(G_0,T_0)$ with Borel $B_0\supseteq T_0$ and unipotent radical
$U_0$, the product $G=Z\times G_0$ with maximal torus $T=Z\times T_0$ and Borel
$B=Z\times B_0$, and a dominant
$\lambda=(\lambda_Z,\lambda_0)\in X(Z)\oplus X(T_0)=X(T)$.

[F1] *Characters of a split torus are one-dimensional representations.* For
$\chi\in X(Z)$ let $k_\chi$ be the one-dimensional rational representation of
$Z$ on which $Z$ acts through $\chi$; every nonzero vector of $k_\chi$ is a
$T_Z$-eigenvector of weight $\chi$. The character $\chi:Z\to\mathbf G_m=\operatorname{GL}_1$ itself defines this action. For the product $G$ the unipotent radical
is $U=1\times U_0$ ([[def-group-of-multiplicative-type-and-torus]],
[[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]],
[[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

[F2] *Root datum and dominance of the product.* The root datum of $(G,T)$ is
$(X(Z)\oplus X(T_0),\ \{0\}\times\Phi_0,\ X(Z)^\vee\oplus X(T_0)^\vee,\
\{0\}\times\Phi_0^\vee)$, so $\langle\lambda,\alpha^\vee\rangle
=\langle\lambda_0,\alpha_0^\vee\rangle$ for every root
$\alpha=(0,\alpha_0)$; hence $\lambda$ is dominant for $G$ if and only if
$\lambda_0$ is dominant for $G_0$
([[def-root-datum-of-a-split-reductive-group]],
[[def-weight-and-dominant-weight-of-a-rational-representation]],
[[def-borel-subgroup-and-maximal-torus]],
[[lem-character-and-cocharacter-lattices-of-a-split-torus]]).

[F3] *Primitive vectors of products.* If $v$ is primitive of weight $\mu$ and
$v'$ is primitive of weight $\mu'$ for the same split reductive group, then
$v\otimes v'$ is primitive of weight $\mu+\mu'$
([[lem-tensor-products-of-primitive-vectors]],
[[def-primitive-vector-of-a-rational-representation]]).

[F4] *Semisimple factor.* Every dominant character $\lambda_0$ of the split
semisimple group $G_0$ is the weight of a primitive vector of a rational
representation of $G_0$
([[lem-dominant-characters-of-split-semisimple-groups-arise-as-primitive-weights]]).

## Proof

**Given:** AC; a split torus $Z$ with character lattice $X(Z)$, a split
semisimple group $(G_0,T_0)$ with Borel $B_0\supseteq T_0$ and unipotent radical
$U_0$, the product $G=Z\times G_0$ with maximal torus $T=Z\times T_0$ and Borel
$B=Z\times B_0$, and a dominant
$\lambda=(\lambda_Z,\lambda_0)\in X(Z)\oplus X(T_0)=X(T)$.

**Proof technique:** direct.

1.1 In the product $G=Z\times G_0$, regard the one-dimensional representation $k_{\lambda_Z}$ as a $G$-module on which $Z$ acts through $\lambda_Z$ and the factor $G_0$ acts trivially. Its nonzero vectors are fixed by $U=1\times U_0$ and are $T$-eigenvectors of weight $(\lambda_Z,0)$, so each nonzero vector of $k_{\lambda_Z}$ is primitive of weight $(\lambda_Z,0)$ for the pair $(B,T)$. [F1]

1.2 By dominance of $\lambda$ and [F2], the character $\lambda_0$ is dominant for $G_0$; by [F4] there exist a rational representation $W$ of $G_0$ and a primitive vector $v_0\in W$ of weight $\lambda_0$. Viewing $W$ as a $G$-module through the projection $G\to G_0$, the same $v_0$ is fixed by $U=1\times U_0$ and is a $T$-eigenvector of weight $(0,\lambda_0)$, hence primitive of weight $(0,\lambda_0)$ for $(B,T)$. [F2, F4]

2.1 By [F3] applied to the two primitive vectors of steps 1.1 and 1.2, the vector $1\otimes v_0$ in the tensor product $k_{\lambda_Z}\otimes W$ is primitive of weight $(\lambda_Z,0)+(0,\lambda_0)=\lambda$ for $(B,T)$; the tensor product is a rational representation of $G$ on which $(z,g_0)$ acts by $\lambda_Z(z)$ on the first factor and through the $G_0$-action on $W$ on the second. [F1, F2, F3, step 1.1, step 1.2]

3.1 Thus $k_{\lambda_Z}\otimes W$ is a rational representation of the product $G=Z\times G_0$ containing the primitive vector $1\otimes v_0$ of weight $\lambda$, and it is obtained by tensoring the one-dimensional representation of $Z$ of weight $\lambda_Z$ with the representation $W$ of $G_0$ carrying the primitive vector $v_0$ of weight $\lambda_0$. [step 2.1] ∎

## Remarks

- Dominance of $\lambda$ on the product is tested only on the simple coroots of the semisimple factor, because the roots of $Z\times G_0$ are the roots of $G_0$ pulled back along the projection; this is why the torus part is unrestricted, exactly as in Milne's reduction of Theorem 22.20 to the semisimple case.
- The one-dimensional representation of the torus contributes a primitive vector of weight $(\lambda_Z,0)$, so tensor products with the semisimple part realize every dominant character of the product.
