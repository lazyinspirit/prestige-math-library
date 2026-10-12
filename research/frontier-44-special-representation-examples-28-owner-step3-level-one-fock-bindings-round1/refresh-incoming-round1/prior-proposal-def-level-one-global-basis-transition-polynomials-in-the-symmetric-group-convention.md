---
id: def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention
kind: definition
title: "Level-one global-basis transition polynomials in the symmetric-group convention"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-symmetric-group-level-one-residue-and-partition-label-convention,
       thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention,
       thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis,
       thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible,
       def-axiom-of-choice]
justified_by: []
aliases: []
axiom_use: "Inherits the axiom of choice through [[thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis]] and [[thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention]] (hence through [[thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero]]) for the identification of the basic labels and the highest-weight decomposition of the Fock space. The transition polynomials, the ambient Gram matrix and the finite linear algebra of the ambient upper vectors are choice-free."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. AMS 47 (2010) 419-481, arXiv:0909.4844 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Remark 5.5, printed p. 24 (D^mu = D(mu^t) tensor sgn); Theorem 8.2, printed pp. 37-38 (the dual canonical basis {D^mu} and the crystal (RP^kappa, e~, f~, eps, phi, wt) of V(Lambda)); sec. 11.4, printed pp. 53-54 (good-node branching)"
    - title: "Alain Lascoux, Bernard Leclerc, Jean-Yves Thibon, Canonical bases of q-deformed Fock spaces, arXiv:q-alg/9602025 (complete 8-page paper)"
      url: "https://arxiv.org/pdf/q-alg/9602025"
      locator: "Theorem 4.1, printed p. 4-5 (existence and uniqueness of the bases {G(lambda)}, {G^-(lambda)} with G(lambda) = sum_lambda d_{lambda,mu}(q)|lambda>, d in Z[q], nonzero only for equal n-core and lambda dominated by mu, d_{lambda lambda} = 1, and {G(lambda): lambda n-regular} = lower crystal basis of M(Lambda_0); the adjoint relation G^dagger(lambda)' = G^-(lambda')); the printed matrices D_m(q) for n=2 and m<=6, where D_2 has G(2) = |2> + q|11> and the degree-4 column of (4) is |4> + q|31> + q|211> + q^2|1111>"
---
## Definition

Work in the linear symmetric-group model of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]]: the
$\mathbb{Q}(q)$-linear isomorphism $J M_\mu = |\mu'\rangle$, the transported
action, bar and $A_0$ standard chart $(F_0)_{\mathrm{sym}}$, and the weight
$\operatorname{wt}(M_\mu) = \Lambda_0 - \sum_i m_i(\mu)\alpha_i$, with
$A = \mathbb{Z}[q,q^{-1}]$.

**The basic module and its lower basis.** Let
$M_{\mathrm{sym}} := J^{-1}V(\Lambda_0) = J^{-1}M_{\mathrm{QG}}$ be the
transported highest-weight module of the vacuum; by
[[thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention]]
its crystal is the $e$-restricted component and its labels are the $e$-restricted
partitions. For an $e$-restricted $\lambda$ define
$$G_{\mathrm{sym}}(\lambda) := J^{-1}G_{\mathrm{QG}}(\lambda'),$$
where $G_{\mathrm{QG}}(\mu)$ is the lower global (canonical) basis element of
the Fock space at the standard vector $|\mu\rangle$
([[thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis]]).
Then $G_{\mathrm{sym}}(\lambda) \equiv M_\lambda \bmod q\,(F_0)_{\mathrm{sym}}$
and the family $\{G_{\mathrm{sym}}(\lambda)\}$ is the transported lower global
basis of $M_{\mathrm{sym}}$, indexed by the restricted labels. Define the
**level-one transition polynomials in the symmetric-group convention** by the
finite weightwise expansion
$$G_{\mathrm{sym}}(\lambda) = \sum_\mu d_{(\lambda,\mu)}(q)\, M_\mu ,$$
the sum being over the partitions $\mu$ of the weight of $\lambda$.

**Ambient polarization and ambient upper coordinates.** Define the ambient
polarization by $B(M_\mu,M_\nu) = \delta_{\mu\nu}$ on the standard basis, a
symmetric nondegenerate bilinear form on each finite weight space. Fix a weight
$w$ and let $V_w$ be the (finite-dimensional) weight space of
$F_{\mathrm{sym}}$; let $D_{\mathrm{rect}}$ be the matrix with columns the
coordinate vectors of $G_{\mathrm{sym}}(\lambda)$ for the finitely many
$e$-restricted $\lambda$ of weight $w$, and rows the **standard** shapes
$M_\mu$, $\mu$ of weight $w$; let
$$H := D_{\mathrm{rect}}^{\mathsf{t}}\, D_{\mathrm{rect}} , \qquad G_{\mathrm{sym}}^*(\lambda) := \sum_\mu \bigl(D_{\mathrm{rect}}H^{-1}\bigr)_{(\mu,\lambda)}\, M_\mu^* ,$$
where $M_\mu^*$ denotes the ambient orthonormal dual frame of the standard
basis. The $G_{\mathrm{sym}}^*(\lambda)$ are the **ambient upper coordinates**
of the basic module: they are the unique elements of the basic subspace
$(M_{\mathrm{sym}})_w\subseteq V_w$ characterized weightwise by $B(G_{\mathrm{sym}}^*(\lambda), G_{\mathrm{sym}}(\lambda')) = \delta_{\lambda\lambda'}$,
and are viewed in the ambient standard frame; adding a vector of the
$B$-orthogonal complement in $V_w$ gives other ambient representatives with
the same pairings. The coefficients
$e_{(\lambda,\mu)}(q) := (D_{\mathrm{rect}}H^{-1})_{(\mu,\lambda)}$ lie in
$\mathbb{Q}(q)$ but need not be Laurent integral or polynomial. They are
coordinates in the ambient space and not a "standard basis of the basic
module"; the exact integral upper basis for the separately transported contravariant
pairing $B_{\mathrm{QG}}$ is the transported upper global basis of
[[thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]], whose
restricted graded $A$-dual lattice is free weightwise and perfectly paired with
the basic lower $A$-span, while no lower-$A$ selfduality, no $A$-unit $H$ and no
full algebraic duality in infinite rank is implied. Upper bar is the adjoint bar
$\psi^\vee$ with its own dual infinity chart and weighted upper operators, not
the ordinary lower bar.

**The full ambient case.** On the whole Fock space the analogous matrix
$D_{\mathrm{full}}$, with columns the $G(\mu)$ over all partitions and rows the
standard shapes, is unitriangular (diagonal $1$, in $q\mathbb{Z}[q]$ below the
diagonal), and the dual matrix with respect to $B$ is
$$D_{\mathrm{full}}^{-\mathsf{t}},$$
which is Laurent integral because the inverse of a unitriangular matrix with
entries in $\mathbb{Z}[q]$ has entries in $\mathbb{Z}[q]$.

**A worked instance.** At $e = 2$ the restricted shape $\lambda = (1,1)$ has
$G_{\mathrm{sym}}(1,1) = M_{1,1} + q\,M_{2}$, so $D_{\mathrm{rect}}$ has the
single column $(q,1)^{\mathsf{t}}$, $H = 1 + q^2$, and
$$G_{\mathrm{sym}}^*(1,1) = \frac{M_{1,1}^* + q\,M_2^*}{1+q^2} = \frac{M_{1,1} + q\,M_2}{1+q^2},$$
an explicit ambient coordinate that is rational but not Laurent integral:
$1 + q^2$ is not a unit of $\mathbb{Z}[q,q^{-1}]$. No specialization of the $d$
to decomposition numbers of Hecke algebras is asserted here without the
separate correct Hecke parameter hypotheses.

## Facts & Assumptions

**Given:** A finite integer $e \ge 2$ and the linear model of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]] with
$J M_\mu = |\mu'\rangle$, transported bar and chart $(F_0)_{\mathrm{sym}} =
\bigoplus_\mu A_0M_\mu$, and weight
$\operatorname{wt}(M_\mu) = \Lambda_0 - \sum_i m_i(\mu)\alpha_i$; the axiom of
choice is assumed as declared in the contract ([[def-axiom-of-choice]]).

[F1] $F_{\mathrm{QG}}$ carries the lower global basis $\{G_{\mathrm{QG}}(\mu)\}$
of [[thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis]]:
an explicit wedge bar $\psi$ with vacuum fixed, $q \mapsto q^{-1}$ and
$U$/bar compatibility; the integral triangular correction
$G_{\mathrm{QG}}(\lambda) = |\lambda\rangle + \sum_{\mu \text{ strictly dominated by } \lambda} d_{\mu\lambda}(q)|\mu\rangle$
with $d_{\mu\lambda} \in q\mathbb{Z}[q]$, diagonal $1$, same $e$-core support and
$G_{\mathrm{QG}}(\lambda) \equiv |\lambda\rangle \bmod qF_0$; the full family is
an $A$-basis of the partition Laurent lattice and an $A_0$ basis, and exactly
the $e$-regular $G_{\mathrm{QG}}(\lambda)$ form the lower global basis of
$M_{\mathrm{QG}} = V(\Lambda_0)$; the bar reverses the wedge word and multiplies
by a scalar depending only on the residues of the entries (its unequal-residue
pair count), so it preserves the weight multiset; LT's transpose statement
concerns the bar matrix, not $D$, and the equality
$d_{\lambda\mu} = d_{\mu'\lambda'}$ for all lower coefficients is false.

[F2] The transported basic module $M_{\mathrm{sym}} = J^{-1}V(\Lambda_0)$ has
the $e$-restricted labels as its crystal, and every restricted shape is reached
from the empty partition by cogood additions
([[thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention]]).

[F3] For every finite root/label component of $M = U^-$ or $V(\lambda)$, the
restricted integral dual $M_A^\vee$ has the actual $A$-basis $\{G^{\mathrm{up}}(b)\}$
dual to $\{G(b)\}$ with perfect pairing $B : (M_A^\vee)_\mu \times (M_A)_\mu \to A$;
globally these bases form direct sums and the dual charts are
$L_0^\vee = \bigoplus A_0G^{\mathrm{up}}(b)$ and
$L_\infty^\vee = \bigoplus A_\infty G^{\mathrm{up}}(b)$ with balanced
$\mathbb{Z}$-intersection; the upper bar $\psi^\vee$ fixes each
$G^{\mathrm{up}}(b)$, the upper operators satisfy the exact mixed adjunction,
and their reductions at $0$ equal the lower crystal operators. This means
restricted graded perfectness, not identification with the full product
$\operatorname{Hom}_A(M_A,A)$, and implies no lower-$A$ selfduality, no $A$-unit
Gram matrix and no equality of upper and lower integral bases
([[thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]]).

[F4] LLT's canonical basis $\{G(\lambda)\}$ of the $q$-deformed Fock space
satisfies $G(\mu) = \sum_\lambda d_{\lambda\mu}(q)|\lambda\rangle$ with
$d_{\lambda\mu} \in \mathbb{Z}[q]$, $d_{\lambda\lambda} = 1$, $d_{\lambda\mu} = 0$
unless $\lambda$ and $\mu$ have the same $n$-core and $\lambda$ is dominated by
$\mu$, and $\{G(\lambda) : \lambda\ n\text{-regular}\}$ is the lower crystal
basis of $M(\Lambda_0)$; the adjoint basis satisfies
$G^\dagger(\lambda)' = G^-(\lambda')$ for the semilinear involution
$|\mu\rangle' = |\mu'\rangle$. The printed $n = 2$ matrices include
$G(2) = |2\rangle + q|11\rangle$ (LLT Theorem 4.1 and the display after it).

[F5] Each weight space $V_w$ of $F_{\mathrm{sym}}$ is finite-dimensional: independence of the full affine simple roots makes the weight determine all residue counts $m_i$, hence $\sum_i m_i=|\lambda|$ is fixed, and only finitely many partitions have that size. The symmetric form with orthonormal standard basis is nondegenerate on $V_w$. For the particular rectangular matrix $D=D_{\mathrm{rect}}$, [F1] gives $D(0)$ as the matrix of distinct coordinate columns; consequently $D(0)^{\mathsf t}D(0)=I$ and $\det(D^{\mathsf t}D)(0)=1$, so this Gram matrix is invertible over $\mathbb Q(q)$ ([[def-symmetric-group-level-one-residue-and-partition-label-convention]]).

## Proof

**Proof technique:** direct.

1.1 Transport of the lower basis and the coefficient identity. By [F1] the QG lower basis satisfies $G_{\mathrm{QG}}(\lambda') = |\lambda'\rangle + \sum_{\nu} D_{\mathrm{QG}}(\nu,\lambda')|\nu\rangle$ with $D_{\mathrm{QG}}(\nu,\lambda')$ the coefficient of $|\nu\rangle$, and $D_{\mathrm{QG}}(\nu,\lambda') = d_{\nu\lambda'}(q)$; applying $J^{-1}$ and using $J^{-1}|\nu\rangle = M_{\nu'}$ gives $G_{\mathrm{sym}}(\lambda) = M_\lambda + \sum_{\nu} d_{\nu\lambda'}(q) M_{\nu'} = \sum_\mu d_{(\lambda,\mu)}(q) M_\mu$ with $d_{(\lambda,\mu)}(q) = D_{\mathrm{QG}}(\mu',\lambda')$, the sum being weightwise finite by [F5], and the congruence $G_{\mathrm{sym}}(\lambda) \equiv M_\lambda \bmod q(F_0)_{\mathrm{sym}}$ follows from $G_{\mathrm{QG}}(\lambda') \equiv |\lambda'\rangle \bmod qF_0$. [given, F1, F5]

1.2 Finite weight spaces and the ambient form. By [F5] each $V_w$ is finite-dimensional, and $B$ restricts to a nondegenerate symmetric bilinear form on it with the standard basis orthonormal. The restricted labels $\lambda$ of weight $w$ are finitely many by [F5], so $D_{\mathrm{rect}}$ has finitely many columns, and the corresponding $G_{\mathrm{sym}}(\lambda)$ are linearly independent because they are distinct elements of the lower global basis of $M_{\mathrm{sym}}$ from [F2] (respectively the defining family of [F1] transported). [given, F2, F5]

2.1 Support of the transition polynomials. By [F1] the QG coefficients are $1$ on the diagonal, lie in $q\mathbb{Z}[q]$ off it, and vanish unless $\nu$ is strictly dominated by $\lambda'$ and has the same $e$-core; transporting, $d_{(\lambda,\lambda)} = 1$, the off-diagonal $d_{(\lambda,\mu)}$ lie in $q\mathbb{Z}[q]$, and they vanish unless $\mu'$ is strictly dominated by $\lambda'$, equivalently $\mu$ strictly dominates $\lambda$, and $\mu$ shares the $e$-core of $\lambda$. For the remaining weight condition: the bar of [F1] reverses the wedge word and multiplies by a scalar read off the residue multiset, hence maps each Fock weight space to itself up to the $q$-semilinear coefficient; the triangular correction recursion producing $G_{\mathrm{QG}}(\lambda')$ from $\psi(|\lambda'\rangle)$ therefore runs inside the weight space of $|\lambda'\rangle$, so every standard vector $|\nu\rangle$ occurring in $G_{\mathrm{QG}}(\lambda')$ has the same residue multiset as $\lambda'$; transported, $d_{(\lambda,\mu)} \ne 0$ forces $m_j(\mu') = m_j(\lambda')$ for all $j$, that is, the full reflected residue weight of $\mu$ equals that of $\lambda$. [given, F1, step 1.1]

2.2 The ambient upper coordinates. Let $D:=D_{\mathrm{rect}}$, with $D_{\mu\lambda}=d_{(\lambda,\mu)}$. The matrix $H=D^{\mathsf t}D$ is the Gram matrix of the basic lower vectors under the ambient orthonormal form. Since $D(0)$ has distinct coordinate columns, $H(0)=I$ by [F5], proving $\det H\ne0$. The columns of $DH^{-1}$ lie in the column space of $D$, namely $(M_{\mathrm{sym}})_w$, and $(DH^{-1})^{\mathsf t}D=H^{-1}H=I$, so they pair as the dual family. Nondegeneracy of $H$ makes this family unique inside the basic subspace. In the whole ambient space the pairing equations determine a coset modulo the orthogonal complement of the basic subspace. The coefficients $e_{(\lambda,\mu)}=(DH^{-1})_{\mu\lambda}$ are in $\mathbb Q(q)$. [given, F5, step 1.2]

3.1 The worked instance at $e = 2$. The weight space of $M_{1,1}$ consists of the standard shapes $(2)$ and $(1,1)$ and of the restricted labels $(1,1)$ only, since $(2)$ is not $2$-restricted. By [F4] the QG lower basis has $G(2) = |2\rangle + q|11\rangle$; transposition gives $2' = (1,1)$ and $(1,1)' = 2$, so $G_{\mathrm{sym}}(1,1) = J^{-1}G(2) = M_{1,1} + qM_2$, whence $D_{\mathrm{rect}} = \binom{q}{1}$ with rows $(2),(1,1)$, $H = D^{\mathsf{t}}D = 1 + q^2$, and $G_{\mathrm{sym}}^*(1,1) = \frac{qM_2^* + M_{1,1}^*}{1+q^2}$; the coefficient $\frac{1}{1+q^2}$ is not in $A = \mathbb{Z}[q,q^{-1}]$, since a Laurent polynomial has no pole at a root of $1+q^2$, so the ambient coordinates are genuinely rational, while the leading term and the integrality of $d$ are as in steps 1.1 and 2.1. [given, F4, step 1.1, step 2.2]

4.1 The full ambient dual matrix. On the whole Fock space, $D_{\mathrm{full}}$ is unitriangular by [F1] with off-diagonal entries in $q\mathbb{Z}[q]$; its dual basis with respect to the ambient form $B$ has coefficient matrix the transpose inverse $D_{\mathrm{full}}^{-\mathsf{t}}$, by the same computation as step 2.2 applied to the square unitriangular matrix (here the standard basis of the whole space is orthonormal and the family $\{G(\mu)\}$ is a basis). We claim $D_{\mathrm{full}}^{-1}$ has entries in $\mathbb{Z}[q]$: in every finite truncation the strictly triangular part $N$ of $D_{\mathrm{full}} = 1 + N$ satisfies $N^{m} = 0$ for large $m$, so $(1+N)^{-1} = 1 - N + N^2 - \dots$ is a finite sum with entries in $\mathbb{Z}[q]$; hence $D_{\mathrm{full}}^{-\mathsf{t}}$ is Laurent integral, in contrast with the non-integral ambient coordinates of step 3.1. [given, F1, step 2.2]

4.2 The exact integral upper basis. The transported upper global basis $\{J^{-1}G^{\mathrm{up}}(b)\}$ of [F3] is, weightwise, an $A$-basis of the restricted integral dual of the basic lower $A$-span with perfect pairing; transporting the statement of [F3] along $J^{-1}$ transports its contravariant pairing to $B_{\mathrm{QG}}$ and preserves the gradings, so in the symmetric-group convention the restricted graded $A$-dual lattice of the basic lower $A$-span is free weightwise and perfectly paired with it. No identification of $B_{\mathrm{QG}}$ with the ambient orthonormal form $B$ is used. The ambient coordinates of step 2.2 are a different object: they are coordinates with respect to the ambient orthonormal frame and need not lie in $A$, as step 3.1 shows; and by [F3] no lower-$A$ selfduality, no $A$-unit Gram matrix and no full algebraic duality in infinite rank follows. [given, F3, step 2.2, step 3.1]

5.1 Upper bar and charts. By [F3] the upper bar $\psi^\vee$ fixes each upper basis element, the upper basis comes with its own dual zero and infinity charts whose balanced $\mathbb{Z}$-intersection is the upper lattice, and the upper operators satisfy the exact mixed adjunction with the lower operators, with reductions at $0$ equal to the lower crystal operators; transporting these statements along $J^{-1}$ gives the corresponding upper bar, charts and operators in the symmetric-group convention, distinct from the ordinary lower bar of [F1]. [given, F1, F3, step 4.2]

6.1 Distinctions and boundary. The construction of steps 1.1 and 2.1 is a **linear** relabelling: $J$ fixes $q$ and only transposes labels, whereas the semilinear involution $|\mu\rangle \mapsto |\mu'\rangle$ of [F4] is the one appearing in adjoint-bar statements, of which LT's symmetry $G^\dagger(\lambda)' = G^-(\lambda')$ is the instance; in particular it does not identify the lower coefficient matrix with its transpose, and by [F1] the equality $d_{\lambda\mu} = d_{\mu'\lambda'}$ for all lower coefficients is false. Finally, the polynomials $d_{(\lambda,\mu)}$ are Fock-space transition coefficients between the standard and lower global bases; identifying them with decomposition numbers of Hecke algebras requires the separate graded/Ariki comparison and the correct Hecke parameter dictionary, which is not asserted here, and every application on this page uses them only as the stated transition data. [given, F1, F3, F4, step 4.2] ∎
