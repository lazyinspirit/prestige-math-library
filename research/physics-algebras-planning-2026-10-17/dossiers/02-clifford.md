# Clifford algebras, spin representations, and fermionic applications

**Research cut-off:** 2026-10-17. **Status:** source-grounded dossier and local-carrier audit complete. Source identities, exact reading coverage, and limitations are in [the source ledger](../sources/02-clifford/README.md). The scope is mathematical Clifford algebra and its spin/geometric representation theory, followed by carefully separated fermionic and condensed-matter applications. It is not a dossier on ordinary finite-group Clifford theory or quantum-computing Clifford gates.

## Convention and scope

Fix a finite-dimensional vector space $V$ over a field $k$ of characteristic not 2, a symmetric bilinear form $B$, and $Q(v)=B(v,v)$. Throughout this dossier, define
\[
\mathrm{Cl}^{+}(V,Q)=T_k(V)/(v\otimes v-Q(v)1),
\qquad vw+wv=2B(v,w)1.
\]
Write $\mathrm{Cl}_{p,q}$ for the real algebra in which $p$ orthogonal basis vectors square to $+1$ and $q$ square to $-1$. The superscript $+$ is omitted after this convention is declared. Some sources use the opposite sign or swap the indices; those source-specific conventions are listed below and must be translated before importing a formula. Over $\mathbb C$, the signature is immaterial for a nondegenerate form.

This convention makes $\mathrm{Cl}_{0,1}\cong\mathbb C$, $\mathrm{Cl}_{1,0}\cong\mathbb R\oplus\mathbb R$, and the Euclidean real Clifford algebra with positive generator squares $\mathrm{Cl}_{n,0}$. Atiyah–Bott–Shapiro's negative-definite $C_k$ is $\mathrm{Cl}_{0,k}$ here. Wernli's quotient $v^2+g(v,v)=0$, with $g$ of signature $(p,q)$, is $\mathrm{Cl}_{q,p}$ in this dossier. The 2026 Yuan–Qi paper labels $p$ negative-square and $q$ positive-square generators, so its $\mathrm{Cl}_{p,q}$ is ours $\mathrm{Cl}_{q,p}$. Gallier and Yuezhao Li use the convention fixed here.

The usual real classification below assumes a nondegenerate real quadratic form; the complex classification assumes a finite-dimensional nondegenerate form over $\mathbb C$. The universal property and PBW statement need only the stated finite-dimensional and characteristic hypotheses. They do not imply semisimplicity for degenerate forms.

## Construction, universal property, and PBW basis

The quotient map $V\to\mathrm{Cl}(V,Q)$ is universal: for every unital associative $k$-algebra $A$, a linear map $f:V\to A$ satisfying $f(v)^2=Q(v)1_A$ extends uniquely to an algebra homomorphism $\mathrm{Cl}(V,Q)\to A$. Polarization of the defining equation gives $f(v)f(w)+f(w)f(v)=2B(v,w)1_A$. This makes the algebra a universal representation of the quadratic relation, rather than a particular matrix realization.

For an ordered basis $e_1,\ldots,e_n$ orthogonal for $B$, the elements
\[
1,\quad e_{i_1}e_{i_2}\cdots e_{i_r}\quad (i_1<\cdots<i_r)
\]
form a basis. Hence $\dim_k\mathrm{Cl}(V,Q)=2^n$. The filtration by word length has associated graded algebra $\operatorname{gr}\mathrm{Cl}(V,Q)\cong\Lambda V$; the exterior algebra is the symbol algebra, not generally an isomorphic ungraded algebra to $\mathrm{Cl}$. The spanning reduction alone is not an independence proof. A noncircular proof uses $c(v)=\epsilon_v+\iota_v$ on $\Lambda V$: the Clifford relation gives a map from the quotient, and the top exterior-degree component of $c(e_{i_1})\cdots c(e_{i_r})1$ is the distinct wedge $e_{i_1}\wedge\cdots\wedge e_{i_r}$. Descending by degree proves independence, including for degenerate $B$. Root's [planning proof note](../root-clifford-pbw-proof-note.md) records this complete argument; it is not yet a published library item. Candidate existing prerequisites are thm-universal-property-of-the-tensor-algebra, def-exterior-algebra-of-a-finite-free-module, and lem-exterior-algebra-basis-monomials. The needed contraction/wedge identities should be local lemmas under the general bilinear-form contract, rather than silently taken from the real positive-inner-product adjoint item.

For superalgebras $A,B$, the graded tensor product has multiplication
\[
(a\widehat\otimes b)(a'\widehat\otimes b')=(-1)^{|b||a'|}aa'\widehat\otimes bb'.
\]
The canonical map
\[
\mathrm{Cl}(V\oplus W,Q_V\oplus Q_W)\cong
\mathrm{Cl}(V,Q_V)\widehat\otimes\mathrm{Cl}(W,Q_W)
\]
uses orthogonality of the summands: odd generators from distinct factors anticommute. An ungraded tensor product does not encode this relation without additional sign/graded structure. The convention and product are treated in ABS §1.6 and Wernli §1.4.

## Real and complex classifications

For real nondegenerate forms, the following table uses the convention above. Entries are ungraded real-algebra isomorphism types; $M_r(D)$ means $r\times r$ matrices over $D$. A direct sum has two simple components and therefore two inequivalent simple modules.

| $n$ | $\mathrm{Cl}_{n,0}$ | $\mathrm{Cl}_{0,n}$ |
|---:|---|---|
| 0 | $\mathbb R$ | $\mathbb R$ |
| 1 | $\mathbb R\oplus\mathbb R$ | $\mathbb C$ |
| 2 | $M_2(\mathbb R)$ | $\mathbb H$ |
| 3 | $M_2(\mathbb C)$ | $\mathbb H\oplus\mathbb H$ |
| 4 | $M_2(\mathbb H)$ | $M_2(\mathbb H)$ |
| 5 | $M_2(\mathbb H)\oplus M_2(\mathbb H)$ | $M_4(\mathbb C)$ |
| 6 | $M_4(\mathbb H)$ | $M_8(\mathbb R)$ |
| 7 | $M_8(\mathbb C)$ | $M_8(\mathbb R)\oplus M_8(\mathbb R)$ |
| 8 | $M_{16}(\mathbb R)$ | $M_{16}(\mathbb R)$ |

The mixed-signature class is determined by these tables and the graded-product rule; ordinary matrix-algebra isomorphism statements include
\[
\mathrm{Cl}_{p+1,q+1}\cong\mathrm{Cl}_{p,q}\otimes M_2(\mathbb R),\qquad
\mathrm{Cl}_{p+8,q}\cong\mathrm{Cl}_{p,q}\otimes M_{16}(\mathbb R),
\]
and likewise for increasing $q$ by eight. At the level of graded Morita type the real pattern is eight-periodic. Do not drop the grading when translating this to $KO$-theory or extension spaces.

For a complex vector space of dimension $n$ with nondegenerate quadratic form,
\[
\mathrm{Cl}_{2m}(\mathbb C)\cong M_{2^m}(\mathbb C),\qquad
\mathrm{Cl}_{2m+1}(\mathbb C)\cong M_{2^m}(\mathbb C)\oplus M_{2^m}(\mathbb C).
\]
The graded Morita pattern is two-periodic. These statements are field-specific: over other fields, the central division algebras and splitting behavior can differ. If $Q$ is degenerate, the classification table does not apply. For example, $Q=0$ gives $\mathrm{Cl}(V,0)=\Lambda V$, which is generally not semisimple.

The table classifies algebras, not a unique choice of spin representation. For a simple real matrix algebra over $D=\mathbb R,\mathbb C,\mathbb H$, its simple module has commutant of the corresponding real/complex/quaternionic type. In split rows there are two simple module types. For complex Clifford algebras, even dimension has one irreducible Clifford module; odd dimension has two inequivalent irreducible Clifford modules. Restricting an odd-dimensional Clifford module to the spin group can identify those two algebra-module choices. In even dimension the complex spin representation splits into the two chiral/Weyl modules $S^+,S^-$. Reality, complex structure, and quaternionic structure of spin modules depend on dimension and real signature; do not infer them from complex dimension alone.

## Involutions, Pin and Spin

Let $\alpha$ be the grading involution, $t$ reversion (reverse the order of a monomial), and $\bar x=t(\alpha(x))$ Clifford conjugation. Thus $\bar v=-v$. The norm $N(x)=x\bar x$ is scalar on the Clifford group. For nondegenerate real $V$, the Clifford group acts on $V$ by the **twisted adjoint**
\[
\widetilde\rho(x)(v)=\alpha(x)vx^{-1}.
\]
For an anisotropic vector $u$ this is the reflection
\[
v\longmapsto v-2\frac{B(v,u)}{Q(u)}u.
\]
The twist compensates for parity: an untwisted adjoint by a single odd vector does not give the reflection formula with the expected determinant.

Cartan–Dieudonné says that the orthogonal group of a finite-dimensional nondegenerate real quadratic space is generated by reflections in anisotropic vectors; the special orthogonal group consists of even products. It is inaccurate to say that $SO(n)$ is generated by individual hyperplane reflections, each of which has determinant $-1$. For real signature $(p,q)$, define the full Pin group using products of vectors with $|Q(v)|=1$; its twisted-adjoint image is all $O(p,q)$. Define $\operatorname{Spin}_{\mathrm{full}}(p,q)$ as its even subgroup; this maps onto all of $SO(p,q)$. The Clifford norm $N(x)=x\bar x$ is $\pm1$ on these groups. When $p,q>0$, the norm-$+1$ subgroup maps onto the identity component $SO_0(p,q)$; it must not be conflated with the even subgroup mapping onto full $SO(p,q)$. For positive- or negative-definite signature, $SO(p,q)$ is connected and the distinction disappears. Group names and norm conventions vary, so state the selected subgroup when using the word Spin. With these definitions one obtains central double covers
\[
1\to\{\pm1\}\to\operatorname{Pin}(p,q)\to O(p,q)\to1,
\qquad
1\to\{\pm1\}\to\operatorname{Spin}_{\mathrm{full}}(p,q)\to SO(p,q)\to1.
\]
The map is the twisted adjoint and the displayed Spin sequence uses the full even subgroup. For Euclidean $n$-space, use the explicit naming convention $\operatorname{Pin}^+(n)\subset\mathrm{Cl}_{n,0}$ (unit vectors square $+1$) and $\operatorname{Pin}^-(n)\subset\mathrm{Cl}_{0,n}$ (unit vectors square $-1$); sources vary in these labels. In definite signature every even product of unit vectors has norm $+1$, so the norm-one and full even groups coincide.

Low-dimensional checks prevent misleading cover claims: $\operatorname{Spin}(2)\cong S^1$ double covers $SO(2)\cong S^1$ but is not simply connected; for $n\ge3$, $\operatorname{Spin}(n)$ is the simply connected universal cover of $SO(n)$. The cover and kernel assertions rely on nondegeneracy and the stated real group definitions. Do not transfer them unchanged to degenerate quadratic spaces or arbitrary base fields.

## Spin geometry and Dirac operators

Let $M$ be an oriented Riemannian $n$-manifold. Its oriented orthonormal frame bundle is a principal $SO(n)$-bundle. A spin structure is a principal $\operatorname{Spin}(n)$-bundle lifting it through the double cover. With orientation already imposed ($w_1(TM)=0$), existence is equivalent to $w_2(TM)=0$; if nonempty, isomorphism classes form a torsor for $H^1(M;\mathbb Z/2)$. A $\operatorname{Spin}^c$ structure is a distinct lift with a $U(1)$ factor and has its own obstruction condition; ABS uses it for complex $K$-orientation.

For the Riemannian spinor and Dirac formulas below, use the conventional Clifford action $c(\xi)^2=-g(\xi,\xi)$, which is a module over $\mathrm{Cl}(T^*M,-g)$ under the plus-$Q$ convention fixed above. For a spin structure $P_{\mathrm{Spin}}$, form the spinor bundle $S=P_{\mathrm{Spin}}\times_{\Delta_n}\Delta_n$. In even dimension $S=S^+\oplus S^-$. The Levi–Civita connection lifts to a compatible spin connection; Clifford multiplication $c:T^*M\otimes S\to S$ defines $D=c\circ\nabla^S$, locally $D=\sum_i c(e^i)\nabla_{e_i}$. Its principal symbol is multiplication by $c(\xi)$, up to the $i$-factor convention, so the Clifford relation makes it elliptic for $\xi\ne0$. It maps $S^+\to S^-$ in even dimension.

A Dirac operator need not require a spin structure on the tangent bundle. The de Rham example acts on $\Lambda^\bullet T^*M$, with $c(\theta)=\theta\wedge-\iota_\theta$, and $D=d+d^*$; it is the Clifford module of differential forms. This Riemannian convention satisfies $c(\theta)^2=-|\theta|^2$, so it is a module for $\mathrm{Cl}(T^*M,-g)$ under this dossier's plus-$Q$ definition. The alternative $c_+(\theta)=\theta\wedge+\iota_\theta$ has square $+|\theta|^2$ and matches $\mathrm{Cl}(T^*M,g)$. For the untwisted spin Dirac operator the Lichnerowicz identity is $D^2=(\nabla^S)^*\nabla^S+\mathrm{scal}/4$. Twisting by an auxiliary bundle adds its Clifford-contracted curvature term (sign depends on curvature/Clifford convention).

On a closed even-dimensional spin manifold, $D^+:S^+\to S^-$ is Fredholm and
\[
\operatorname{ind}(D^+)=\int_M\widehat A(TM).
\]
With a complex twisting bundle $E$, the integrand is $\widehat A(TM)\operatorname{ch}(E)$. Noncompact manifolds, boundaries, incomplete metrics, or non-Fredholm operators require added analytic hypotheses and may need boundary/index corrections. Wernli states the Lichnerowicz and Atiyah–Singer results but does not supply full proofs of either; its proof of the $w_2=0$ spin-lift sufficiency points to the literature. That is a missing local proof supplier, not a mathematically open theorem.

## CAR, Fock space, and Majorana generators

Let $E$ be a complex pre-Hilbert space and $H$ its completion. On the antisymmetric Fock space $\mathcal F_a(H)=\bigoplus_{r\ge0}\Lambda^rH$, creation is exterior multiplication and annihilation is contraction. With inner product conjugate-linear in the first variable, $a(u)$ is conjugate-linear and $a^*(u)$ linear, and
\[
\{a(u),a(v)\}=0,\quad \{a^*(u),a^*(v)\}=0,\quad
\{a(u),a^*(v)\}=\langle u,v\rangle I.
\]
For $n=\dim H<\infty$, $\dim\mathcal F_a(H)=2^n$, and the CAR algebra is $M_{2^n}(\mathbb C)$. In infinite dimension the abstract CAR $C^*$-algebra is the closure of the increasing finite-mode algebras; its Fock representation is irreducible but not the only irreducible representation. The abstract relations and the Fock representation are different levels of structure.

For orthonormal modes $a_j$, set
\[
\gamma_{2j-1}=a_j+a_j^*,\qquad
\gamma_{2j}=i(a_j^*-a_j).
\]
Then each $\gamma_r$ is self-adjoint and $\{\gamma_r,\gamma_s\}=2\delta_{rs}I$, a representation of $\mathrm{Cl}_{2n,0}\otimes\mathbb C$. This identifies the finite-mode complex Clifford algebra with the finite CAR matrix algebra, but the identification does not make every abstract CAR representation a Fock representation. A real-linear map on the realification of $H$, $f(u)=(a(u)+a(u)^*)/\sqrt2$, satisfies $f(u)^2=\|u\|^2 I/2$, so it represents the quadratic form $Q(u)=\|u\|^2/2$. Keep this normalization explicit when translating to a Clifford convention.

CAR algebraic facts alone do not establish physical spin-statistics, locality, a vacuum state, or a QFT representation. Infinite-degree systems can have inequivalent representations; these require separate assumptions and analysis.

## Grading, supersymmetry, and Morse theory

A super vector space has an even/odd grading. In a superalgebra homogeneous multiplication and tensoring use Koszul signs; Wernli §1.1 provides the algebraic setup. Supersymmetric quantum mechanics is a representation on a graded Hilbert space with odd supercharges. In the simplest normalization used by Witten, self-adjoint charges $Q_i$ satisfy $Q_i^2=H$ and $Q_1Q_2+Q_2Q_1=0$; parity anticommutes with $Q_i$ and commutes with $H$. In a $1+1$-dimensional Poincaré variant, the squares can be $H+P$ and $H-P$. General supersymmetry algebras can include additional charges and central terms, so these equations describe the model at hand, not every supersymmetric theory.

For a compact Riemannian manifold, $Q_1=d+d^*$, $Q_2=i(d-d^*)$ give $H=dd^*+d^*d$; the zero-energy states are harmonic forms and encode de Rham cohomology by Hodge theory. For a smooth function $h$, $d_t=e^{-th}de^{th}=d+t\,dh\wedge$ is a cochain-isomorphic Witten deformation. The compactness/elliptic setting is important for the discrete spectral and harmonic-form conclusions. Witten's paper explains the Morse inequalities from this model. It also proposes an instanton-count differential/strong Morse-complex argument; the paper marks that argument conjectural rather than proving it. Its infinite-dimensional field-theory and renormalization discussion is heuristic, not a theorem about arbitrary supersymmetric QFT.

## Clifford modules, K-theory, and Bott periodicity

Atiyah–Bott–Shapiro (ABS) develops graded Clifford modules, Pin/Spin groups, and module-difference groups that model $K$- and $KO$-classes. It gives algebraic periodicity and uses Clifford modules to construct Thom classes. Its Theorem 11.5 identifies the Clifford-module groups $A_k$ with $KO^{-k}(\mathrm{pt})$ using stable orthogonal-group periodicity as an input; this is not a self-contained independent proof of real Bott periodicity. Under its hypotheses, the Clifford construction gives a $KO$-orientation for spin real bundles of rank divisible by eight and a complex $K$-orientation for the stated $\operatorname{Spin}^c$ bundles of even rank. Such orientations and Thom classes need finite-dimensional bundle and $K$-theory hypotheses; they do not follow from an ungraded algebra table alone.

The current library has substantial **complex** $K$-theory and vector-bundle suppliers, but no real $KO$-periodicity/ABS Clifford-module theorem. Consequently an argument from a general real Clifford module to a KO Thom class still needs a named supplier; the existing complex Bott items cannot fill that gap.

## Free-fermion phases, interactions, and dated 2025–26 evidence

Kitaev's periodic-table paper treats gapped noninteracting fermions (and disorder when states near the Fermi energy are absent or localized), with charge conservation and/or time reversal as symmetry data. Under stable equivalence (adding trivial bands), real and complex Clifford extension problems and Bott periodicity give the tenfold-way groups; a commonly used indexing is $\pi_0(R_{q-d})$ for real and $\pi_0(C_{q-d})$ for complex classes, with convention-dependent index labels. A periodic Bloch problem naturally includes weak invariants through $K$-theory of the Brillouin torus; the strong continuum classification is not the whole lattice classification. The paper invokes $K$-homology for finite/real-space descriptions and itself warns that interaction stability is not universal.

Fidkowski–Kitaev give a specific interaction counterexample: for a one-dimensional Majorana chain with their unusual $T^2=1$ symmetry, the free integer invariant reduces to $\mathbb Z/8$ when quartic interactions are admitted. Their explicit path is a model-specific gapped-path construction with analytic and numerical ingredients. It does not prove a universal interacting classification for all symmetry groups.

Two later mathematical/physical examples delimit how the Clifford vocabulary is used:

- Johnson et al. (PRX 2025) model liquid-crystal defects with low-dimensional Clifford algebras, bivectors and spinors. Their terms “Majorana-like” and “Weyl-like” describe classical texture/topology analogies in the stated liquid-crystal model; they do not establish a quantum fermion representation or a general particle-physics theorem. Their numerical/continuum conclusions depend on their specified Landau–de Gennes and flow assumptions.
- Li (2026) studies strong/weak phases on aperiodic Delone lattices using real $C^*$-algebras, groupoid and coarse models, $K/KK$-theory, and position spectral triples. Its theorems are under its stated lattice, locality, and algebraic hypotheses; this is evidence of rigorous extensions beyond periodic Bloch models, not a blanket classification of every disordered phase.

The 2026 Yuan–Qi article is a current, broad symmetry-classification contribution: it constructs $\mathbb Z/2$-graded symmetry algebras, decomposes them by graded Wedderburn–Artin methods, and builds Dirac Hamiltonians computationally. But the paper explicitly calls the comparison $K(A^V_{\mathrm{sym}})\simeq\Omega^V K(A_{\mathrm{sym}})$ a **conjecture** in §II.E.3 (PDF p. 6). Appendix E (PDF pp. 32–33, opening and E.1–E.3) says Karoubi's theorem covers groups admitting antilinear symmetries; the authors state there are no results for the projective-representation or Hamiltonian-anticommutation cases, assume the generalization, and leave that proof to experts. Treat results depending on those cases as conditional on that unproved generalization. This dossier records the source's explicit proof gap; it does not independently establish a global open-problem claim or label it an op-status theorem.

These sources were checked through 2026-10-17, but this is a targeted evidence sample, not a systematic census of every current phase-classification result.

## Diagram semantics and proof-contract boundaries

| Diagram or displayed arrow | Exact meaning in this dossier | Contract / caveat |
|---|---|---|
| $V\perp W\to\mathrm{Cl}(V\oplus W)\cong\mathrm{Cl}(V)\widehat\otimes\mathrm{Cl}(W)$ | Canonical graded-algebra isomorphism induced by inclusions of orthogonal summands | Graded tensor multiplication is essential; it is not the ordinary ungraded tensor product by default. |
| $1\to\{\pm1\}\to\operatorname{Pin}(p,q)\to O(p,q)\to1$ | Exact central double-cover sequence under the twisted adjoint | Requires the nondegenerate real form and normalized Clifford group; each reflection lift is odd. |
| $1\to\{\pm1\}\to\operatorname{Spin}(p,q)\to SO(p,q)\to1$ | Restriction to even products | $SO$ is generated by even reflection products, not individual reflections. |
| $P_{\mathrm{Spin}}\to P_{SO}\to M$ | A spin structure is a lift of the oriented frame bundle along $\mathrm{Spin}(n)\to SO(n)$ | Existence iff oriented $TM$ has $w_2=0$; this is a geometric lifting statement, not an algebra classification. |
| $S=P_{\mathrm{Spin}}\times_\Delta\Delta_n\xrightarrow{\nabla,c}D$ | Associated spinor bundle plus Clifford multiplication and a compatible connection produce a Dirac operator | A Dirac bundle can exist without a spin lift of $TM$; elliptic/index claims need their own analytic hypotheses. |
| $K(A^V_{\mathrm{sym}})\to\Omega^V K(A_{\mathrm{sym}})$ | Yuan–Qi's comparison map from a Dirac mass/classifying space to a looped classifying space | The general equivariant homotopy-equivalence assertion is explicitly conjectural/assumed for cases beyond the proved Karoubi scope. |

## Counterexamples and common scope failures

- **Degenerate quadratic form:** if $Q=0$, $\mathrm{Cl}=\Lambda V$, generally with nilpotents and no semisimple matrix classification. In Gallier's twisted-adjoint example for dimension at least two, $x=1+e_1e_2$ acts trivially but is not a scalar; this blocks an unqualified scalar-kernel claim outside the stated Clifford group/nondegenerate contract.
- **Wrong tensor product:** orthogonal-sum generators from different factors anticommute; ignoring Koszul signs can make a proposed tensor-product map fail to preserve relations.
- **Wrong reflection parity:** an individual hyperplane reflection has determinant $-1$; only an even product lies in $SO$.
- **Wrong sign/index order:** $\mathrm{Cl}_{0,1}=\mathbb C$ and $\mathrm{Cl}_{1,0}=\mathbb R\oplus\mathbb R$ in this dossier. A formula copied from Wernli or Yuan–Qi without translating conventions will swap the entries.
- **Wrong notion of representation:** an irreducible Clifford module, a representation of the CAR $C^*$-algebra, a quantum field representation, and a spinor bundle are related but not interchangeable objects.
- **Wrong phase-classification scope:** tenfold-way tables classify specified free/stable/gapped symmetry classes; the Fidkowski–Kitaev example disproves universal interaction stability. Periodic Bloch, aperiodic, localized/disordered, crystalline, and interacting systems each require their own hypotheses.
- **Wrong meaning of “Clifford”:** the item def-clifford-obstruction-class and library page on Clifford theory over normal subgroups concern ordinary finite-group Clifford theory. The items def-qc-clifford-normalizer and def-qc-binary-clifford-tableau and the quantum-computing page on Pauli and Clifford groups concern Pauli normalizers/tableaux. None supplies Clifford algebra PBW, real classification, Pin/Spin, or spin geometry.

## Existing library carriers and missing proof suppliers

### Read local carriers that can be reused with bounded claims

- **Fixed free Dirac matrices and projections:** def-qft-dirac-projections, lem-qft-dirac-projection-matrices, def-qft-free-dirac-model, pthm-qft-dirac-free-properties, ex-qft-dirac-rotation-parity, lem-qft-example-spin-trace-completeness, lem-qft-free-dirac-car-locality, lem-qft-dirac-covariance-spectrum, and lem-qft-dirac-fermionic-translation-spectrum in physics/items/. The published def-qft-dirac-projections fixes explicit $4\times4$ Pauli/Dirac matrices, $\eta=\operatorname{diag}(-,+,+,+)$, and $\{\gamma^a,\gamma^b\}=-2\eta^{ab}I$, i.e. effective Clifford metric $h=-\eta$; it also fixes Hilbert and energy-projection conventions. The companion matrix lemma and spin-trace completeness item prove finite-dimensional matrix identities and spin sums. The free-field items provide a selected free Dirac/CAR model. These are useful physical carriers, not universal Clifford classification, PBW, real Pin/Spin, or abstract CAR $C^*$-algebra suppliers. Do not duplicate the fixed 4D computations in this dossier's downstream scaffold.
- **Complex topological $K$-theory:** def-complex-topological-k-zero-by-grothendieck-completion, def-external-product-in-complex-k-theory, thm-fundamental-product-theorem-for-complex-k-theory, thm-complex-bott-periodicity, cor-complex-k-theory-of-spheres, and thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory. These support complex $K$-theory under their compact/Hausdorff or finite-CW hypotheses. They do not supply real $KO$, ABS Clifford modules, or the real eightfold table.
- **PBW proof prerequisites:** thm-universal-property-of-the-tensor-algebra, def-exterior-algebra-of-a-finite-free-module, and lem-exterior-algebra-basis-monomials supply parts of the construction and target basis. The existing def-interior-product-on-the-exterior-algebra and thm-interior-product-is-adjoint-to-exterior-multiplication are stated for finite-dimensional real inner-product spaces with a positive Gram pairing; the Clifford proof needs local wedge/contraction identities for arbitrary symmetric $B$, including degenerate forms. The existing thm-exterior-algebra-laws and def-exterior-algebra-of-a-finite-free-module are separate reusable inputs. Root's planning note gives the noncircular $\epsilon+\iota$ proof plan, but no Clifford PBW item has been published.
- **Vector-bundle/characteristic-class prerequisites:** thm-oriented-real-vector-bundles-are-classified-by-bso, thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians, thm-mod-two-cohomology-of-bo-n, Stiefel–Whitney class items, and the oriented/stable clutching theorems. They support classifying-space and $w_2$ prerequisites, but no audited item proves the spin-frame-bundle lift theorem or constructs the universal spinor bundle/Dirac operator.
- **Low-dimensional cover example:** lem-pi-three-so-three-generated-by-the-quaternion-double-cover proves the quaternion double cover used for $SO(3)$ and its $\pi_3$ calculation. It is not the general Spin(n) construction or classification.

def-qft-example-data fixes the separate Minkowski/geometric metric and its effective algebraic contraction; use it when linking to the finite physical gamma-matrix items. It has a qualified carrier relationship to this dossier, not an automatic dependency for a universal real Clifford theorem. A cross-engine supplier likewise needs an explicit contextual route instead of an assumed mathematics dependency.

### Missing mathematics items if the project intends to publish this material

No native item currently supplies the full universal Clifford algebra and PBW basis; real/complex classification with declared signs and graded periodicity; graded tensor product/direct-sum theorem; Pin/Spin twisted-adjoint exact covers; spin module reality types; CAR/Fock/Majorana universal construction; $w_2$-criterion and spinor-bundle/Dirac construction; Lichnerowicz/Atiyah–Singer index prerequisites; or the ABS real $KO$-orientation/Thom class. Root's PBW note is a planning-level candidate, not a published item. Under the repository's proof contract, every planned theorem must close through a checked local proof supplier; an external citation by itself does not close the item. Where a local supplier or valid dependency route is not yet available, retain an explicit blocked authoring obligation rather than authoring an unsupported theorem. Root and algebra_scaffold should decide which layer is intended; the physical 4D carrier should remain a consumer of universal facts, not their proof.

## Source-level proof cautions

Gallier's notes are a strong full-length elementary supplier, but two local proof slips were found and should not be copied: in §1.6, printed pp. 34–36, Proposition 1.16 claims $\mathbb C\otimes_{\mathbb R}\mathbb H\to\operatorname{End}_{\mathbb C}(\mathbb H)$ via $\pi(y\otimes z)(x)=yxz$. Composition gives right factor $z'z$, not $zz'$. A homomorphism from this stated domain can instead use $x\mapsto yx\bar z$, or the source can explicitly replace $\mathbb H$ by $\mathbb H^{op}$ and use the right action. The preceding dimension line in Lemma 1.15 appears to have $2^{n+2}=2^n\cdot2$ where $2^{n+2}=2^n\cdot4$ is required, since $\dim\mathrm{Cl}_{0,2}=4$. The table itself is independently corroborated by ABS and Wernli. Gallier's introductory shorthand that $SO(n)$ is generated by “the reflections” should be corrected to “even products of reflections.”

Wernli §1.2 has a normalization typo: its defining quotient gives $v^2=-g(v,v)$ and polarized relation $vw+wv=-2g(v,w)$, while a later remark prints $f(v)^2=-2g(v,v)$. Derive such normalizations from the definition. Wernli's PBW proof is a sketch; ABS §§1–2 plus the filtered argument above are the safer supplier for a formal local proof.

## Handoff

- **To root:** the source manifest and this dossier are ready for integration. The user's requested scope is the universal real/complex Clifford core and its downstream geometry/physics interfaces. The next step is to route the candidate PBW proof and the remaining classification, graded-tensor, Pin/Spin, geometry, CAR, and ABS claims through the local item schema, retaining blocked authoring obligations wherever a checked local supplier is still missing.
- **To algebra_scaffold:** the item map is intentionally bounded. Keep the existing QFT gamma/projection and spin-sum items as finite-dimensional consumers; route any general spin/Clifford statement through new algebraic and geometric suppliers. The real $KO$/ABS bridge is separate from the current complex $K$ catalogue.
- **To algebra_audit:** retain the three Gallier corrections above and the exact Yuan–Qi conditional scope (PDF p. 6 §II.E.3; pp. 32–33 Appendix E opening/E.1–E.3). Do not promote the paper's “there are no results” sentence into an independent global literature survey or an op-status without a separate current-state review.
