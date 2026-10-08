---
id: def-cg-crystallographic-scaling-coroot-and-lattice
kind: definition
title: "Crystallographic scalings: scaled simple roots, coroots and the root, coroot and weight lattices"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 4
deps: [def-hh-coxeter-matrix-word-group-and-length, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, def-coroot-and-dual-root-system, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, def-reduced-crystallographic-euclidean-root-system, def-linear-basis, thm-rank-nullity]
justified_by: [thm-cg-crystallographic-finite-type-and-lattice-stability]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Lie Algebras, Algebraic Groups, and Lie Groups (course notes, version 2.00)"
      url: "https://www.jmilne.org/math/CourseNotes/LAG.pdf"
      locator: "Chapter I, §7, 7.22-7.25, printed p. 76: Q(R)=ZR, every base is a Z-basis of Q(R), P(R) is dual to Q(R^vee), Q(R) is contained in P(R) with finite quotient, and the fundamental weights are dual to the simple coroots. Definition 7.4, printed p. 67, gives the root-system integrality convention. Milne notes after 7.25 that proofs in this section are to be completed; this is used for conventions, not as proof of the local lattice criterion."
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed. (author-hosted digital edition)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV, §7 'Integral Forms', printed pp. 266-267: Proposition 4.62 and its proof show, in the compact semisimple Lie-group setting, that algebraic integrality is equivalent to integral pairing with each simple coroot; Proposition 4.64 and its proof compute the index of the Z-span of the roots in the algebraically integral forms as the Cartan determinant. These are representation-theoretic context, not proof of the general real-form lattice criterion here."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $S$ be a finite set, let $m$ be a Coxeter matrix on $S$, let $W$ be the
presented Coxeter group with its universal property
([[def-hh-coxeter-matrix-word-group-and-length]]), let $V=\mathbb R^S$ be the
real vector space with its basis $(e_s)_{s\in S}$, let $B$ be the Coxeter form
and let $\rho:W\to\mathrm{GL}(V)$ be the canonical reflection homomorphism with
its reflections $r_a$ and root system $\Phi$
([[def-cg-real-coxeter-form-and-reflection]],
[[lem-cg-reflection-form-invariance-and-rank-two-orders]],
[[def-cg-canonical-reflection-homomorphism]]). No definiteness or
nondegeneracy of $B$ is assumed.

A **scaling** of this geometry is a family $c=(c_s)_{s\in S}$ of positive real
numbers; with $a_s:=c_se_s$ define
$$a_s^\vee:=\frac{2a_s}{B(a_s,a_s)}=\frac{2e_s}{c_s},\qquad a_{st}:=B(a_s,a_t^\vee)=\frac{2B(a_s,a_t)}{B(a_t,a_t)}\qquad(s,t\in S).$$

Since $c_s>0$ and $(e_s)_{s\in S}$ is a basis, the $a_s$ form a basis of $V$
and $B(a_s,a_s)=c_s^2B(e_s,e_s)=c_s^2\ne0$
([[def-cg-real-coxeter-form-and-reflection]], [[def-linear-basis]]); hence
each $a_s^\vee$ is defined, and $a_s^\vee=\frac{2c_se_s}{c_s^2}=\frac{2e_s}{c_s}$.
The reflection $r_{a_s}$ of [[def-cg-real-coxeter-form-and-reflection]] is the
generator reflection $r_{e_s}$ of the geometry, because the reflection formula
depends only on the line spanned by the normal: for $\lambda\ne0$ and
$B(a,a)\ne0$ substitution gives $r_{\lambda a}(v)=v-\frac{2B(v,\lambda a)}{B(\lambda a,\lambda a)}\lambda a=v-\frac{2B(v,a)}{B(a,a)}a=r_a(v)$,
so $r_{\lambda a}=r_a$, and $a_s=c_se_s$ with $c_s>0$. The number
$a_{st}\in\mathbb R$ is the **Cartan number** of the ordered pair $(s,t)$, and
$a_{ss}=B(a_s,a_s^\vee)=B\bigl(a_s,\frac{2a_s}{B(a_s,a_s)}\bigr)=2$.

The scaling $c$ is **crystallographic** when $a_{st}\in\mathbb Z$ for all
$s,t\in S$, equivalently when $B(a_t,a_s^\vee)\in\mathbb Z$ for all
$s,t\in S$. In that case define the **root lattice**, **coroot lattice** and
**weight lattice** of the scaling by
$$Q:=\sum_{s\in S}\mathbb Za_s,\qquad Q^\vee:=\sum_{s\in S}\mathbb Za_s^\vee,\qquad P:=\{\lambda\in V:B(\lambda,q^\vee)\in\mathbb Z\text{ for all }q^\vee\in Q^\vee\},$$
the **scaled root set** $\Phi_c:=\{\rho(w)a_s:w\in W,\ s\in S\}$, and the
**scaled Cartan matrix** $A:=(a_{st})_{s,t\in S}$ of $c$.

### Well-definedness, lattice provisos, and the interface with the published lattices

$a_s=c_se_s$ and $a_s^\vee=2e_s/c_s$ are nonzero scalar multiples of the basis
vectors $e_s$, so both $(a_s)_{s\in S}$ and $(a_s^\vee)_{s\in S}$ are bases of
$V$. Thus $Q$ and $Q^\vee$ are free abelian subgroups of rank $|S|$. The set
$P$ is an additive subgroup, since each condition $B(\lambda,q^\vee)\in\mathbb
Z$ is preserved by addition and negation. If
$q=\sum_{s\in S}m_sa_s\in Q$ and
$q^\vee=\sum_{t\in S}n_ta_t^\vee\in Q^\vee$ with $m_s,n_t\in\mathbb Z$, then
$$B(q,q^\vee)=\sum_{s,t\in S}m_sn_tB(a_s,a_t^\vee)=\sum_{s,t\in S}m_sn_ta_{st}\in\mathbb Z$$
in the crystallographic case, so $Q\subseteq P$.

Here a **lattice** in $V$ means a discrete subgroup whose real span is $V$;
this convention includes the rank-zero lattice $\{0\}$ when $V=0$. The map
$$\varphi:V\longrightarrow\mathbb R^S,\qquad \varphi(\lambda):=\bigl(B(\lambda,a_s^\vee)\bigr)_{s\in S},$$
is linear. Because $(a_s^\vee)_{s\in S}$ is a basis and $B$ is symmetric,
$\ker\varphi=\operatorname{rad}(B)$: vanishing against each $a_s^\vee$ is
equivalent by linearity to vanishing against every vector of $V$. Hence
$\varphi$ is injective exactly when $B$ is nondegenerate; both its domain and
codomain have dimension $|S|$, so the rank-nullity theorem
([[thm-rank-nullity]]) makes this equivalent to $\varphi$ being an
isomorphism. If $\varphi$ is an isomorphism then
$P=\varphi^{-1}(\mathbb Z^S)$ is the $\mathbb Z$-span of the real basis
$(\omega_s)_{s\in S}$ characterized by $B(\omega_s,a_t^\vee)=\delta_{st}$, so
it is a lattice. If $B$ is degenerate then
$\operatorname{rad}(B)\subseteq P$, so $P$ contains a nonzero linear subspace
and is not discrete. For
instance for $S=\{s,t\}$, $m(s,t)=\infty$, $c_s=c_t=1$ one has
$B(e_s,e_t)=-1$ and $P=\{\lambda:\lambda_s-\lambda_t\in\frac12\mathbb Z\}$, a
union of parallel lines. In particular $P$ is a lattice in the positive
definite setting of (2) of [[lem-cg-integer-pairings-and-allowed-dihedral-labels]]
and of [[thm-cg-crystallographic-finite-type-and-lattice-stability]]; in the
degenerate range the term "weight lattice" names $P$ without a discreteness
claim.

When $B$ is positive definite and $\Phi_c$ has been proved to be a reduced
crystallographic Euclidean root system with base $\{a_s:s\in S\}$
([[thm-cg-crystallographic-finite-type-and-lattice-stability]] (2)), the sets
$Q$, $Q^\vee$ and $P$ are exactly the root lattice, coroot lattice and weight
lattice of that root system in the sense of
[[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]], and
the elements $a_s^\vee=\frac{2a_s}{B(a_s,a_s)}$ are its simple coroots in the
sense of [[def-coroot-and-dual-root-system]]. The definition is deliberately
stated before that identification is available: it is a property declaration
for the pair (geometry, scaling), and the paragraphs above justify only its own
well-definedness.

This item asserts no existence of a crystallographic scaling, and in particular
makes no claim about the non-crystallographic finite types $H_3$, $H_4$, or
$I_2(m)$ with $m\notin\{2,3,4,6\}$. It also does not assert that $\Phi_c$ is a
root system, that $Q=\mathbb Z\Phi_c$, or that any pairing
$B(\beta,\gamma^\vee)$ of non-simple elements of $\Phi_c$ is an integer: for a
crystallographic scaling these facts are proved in
[[lem-cg-integer-pairings-and-allowed-dihedral-labels]] and
[[thm-cg-crystallographic-finite-type-and-lattice-stability]]. No choice
principle is used: $S$ is finite and every object above is defined from the
given finite data.
