---
id: lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras
kind: lemma
title: "The opposite Borels of a symmetrizable Kac–Moody algebra are root-degreewise dual Lie bialgebras"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-exterior-algebra-of-a-vector-space
  - def-kac-moody-algebra-associated-to-a-gcm
  - def-kac-moody-root-lattice-height-and-positive-cone
  - def-lie-algebra-over-a-field
  - def-lie-bialgebra-and-root-graded-manin-triple
  - def-realization-of-a-generalized-cartan-matrix
  - def-symmetric-algebra-of-a-vector-space
  - def-symmetrizable-generalized-cartan-matrix
  - def-universal-enveloping-algebra
  - lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix
  - lem-pbw-for-countably-presented-kac-moody-lie-algebras
  - prop-contragredient-algebra-has-a-triangular-decomposition
  - prop-kac-moody-root-spaces-are-finite-dimensional
  - thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra
  - thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero
  - thm-root-graded-manin-triple-gives-dual-lie-bialgebras
  - thm-serre-presentation-of-a-kac-moody-algebra
aliases: []
dependency_level: 2
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 10, §10.4.2.1–10.4.2.2, printed pp. 244–245: the upper/lower Borel pairing in sl(2) and the Kac–Moody setup; §10.4.1.4–10.4.1.8, printed pp. 242–244, and Exercise 10(c), printed p. 251: the double construction and its g⊕h realization. The proof below gives the root-graded construction explicitly."
    - title: "Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum Current Algebras, Journal of Lie Theory 13 (2003), 21–64"
      url: "https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf"
      locator: "§1.1, printed p. 22: the nonsingular rank-sized principal block and complementary Cartan coordinates; §2.1, printed pp. 35–36, Lemma 2.10: the graded-dual Borel argument uses the nondegenerate invariant pairing between opposite Borels."
    - title: "A. Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf"
      locator: "Lemma 2.2.1 and Theorem 2.2.3, printed pp. 28–32: the invariant form, perfect opposite-root-space pairings, and Cartan normalization."
pipeline_run: frontier-43-complex-representation-15
---

## Statement

Let $A=(a_{ij})_{i,j\in I}$ be a finite symmetrizable generalized Cartan
matrix over $\mathbb C$, with positive symmetrizer
$D=\operatorname{diag}(d_i)$ and rank $r$. Let $\mathfrak g=\mathfrak g(A)$
be defined from a minimal realization, with triangular decomposition
$\mathfrak g=\mathfrak n^-\oplus\mathfrak h\oplus\mathfrak n^+$ and Borels
$\mathfrak b^\pm=\mathfrak h\oplus\mathfrak n^\pm$. Use the invariant form
$B=(\cdot|\cdot)$ normalized by
$(h_i|h)=\alpha_i(h)/d_i$ and $(e_i|f_j)=\delta_{ij}/d_i$.

(i) **Root-degreewise enveloping-algebra duality.** The form pairs
$\mathfrak g_\alpha$ and $\mathfrak g_{-\alpha}$ perfectly. It induces a
canonical degreewise perfect vector-space pairing on $U(\mathfrak n^+)$ and
$U(\mathfrak n^-)$ by PBW symmetrization. Each fixed root-degree component is
finite-dimensional, and the pairing identifies
$U(\mathfrak n^-)\cong (U(\mathfrak n^+))^{\mathrm{gr}\prime}$, the restricted
graded dual; the reverse identification holds as well. This is a vector-space
pairing, not a Hopf pairing for the standard primitive coproducts.

(ii) **Dual Borel Lie bialgebras.** Let $J\subseteq I$ be such that the
principal block $A_J$ is nonsingular, with $|J|=r$; such a set is supplied by
[[lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix]]. Choose
complementary Cartan coordinates $D_j$ for $j\in I\setminus J$ with
$\alpha_i(D_j)=\delta_{ij}$. In the quadratic Lie algebra
$\mathfrak d:=\mathfrak g\oplus\mathfrak h$, with form
$B_{\mathfrak d}((x,a),(y,b))=\tfrac12((x|y)-(a|b))$, the maps
$\iota_+(h+x_+)=(h+x_+,h)$ and
$\iota_-(h+x_-)=(h+x_-,-h)$ embed the Borels as complementary isotropic
subalgebras. Thus they form a root-graded Manin triple. The cross pairing is
$ (h|h')+\tfrac12(x_+|x_-)$ on $h+x_+$ and $h'+x_-$; its transpose brackets define
dual Lie bialgebra structures on $\mathfrak b^+$ and $\mathfrak b^-$. Both cobrackets vanish on $\mathfrak h$, and the positive cobracket satisfies $\delta^+(e_i)=d_i e_i\wedge h_i$. The enveloping-algebra vector-space pairing in (i) retains the original invariant-form normalization; it is independent of this rescaled Manin pairing.

## Facts & Assumptions

**Given:** A finite symmetrizable generalized Cartan matrix, a minimal
realization, and the associated Kac–Moody algebra over $\mathbb C$.

[F1] The simple roots and coroots are independent, and a minimal realization
has $\dim\mathfrak h=2|I|-r$
([[def-realization-of-a-generalized-cartan-matrix]]).

[F2] The algebra has the triangular decomposition and separate finite-simple
generator Serre presentations of $\mathfrak n^\pm$
([[def-kac-moody-algebra-associated-to-a-gcm]],
[[prop-contragredient-algebra-has-a-triangular-decomposition]],
[[thm-serre-presentation-of-a-kac-moody-algebra]]).

[F3] Root spaces are finite-dimensional, and $\mathfrak g_\alpha$ pairs
perfectly with $\mathfrak g_{-\alpha}$ under the invariant form; the Cartan
restriction is nondegenerate
([[prop-kac-moody-root-spaces-are-finite-dimensional]],
[[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]]).

[F4] A nonsingular principal block of size $r$ exists for $A$
([[lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix]]).

[F5] A countably spanned Kac–Moody half with a supplied countable ordered
basis has the PBW ordered-monomial basis, and in characteristic zero PBW
symmetrization is a filtered vector-space isomorphism
([[lem-pbw-for-countably-presented-kac-moody-lie-algebras]],
[[thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero]]).

[F6] A locally finite root-graded Manin triple gives dual Lie bialgebras by
transposing the opposite brackets
([[thm-root-graded-manin-triple-gives-dual-lie-bialgebras]]).

## Proof

**Proof technique:** PBW symmetrization and the root-graded Manin double.

1.1 Put $H=\operatorname{span}\{h_i:i\in I\}$ and define $\rho:\mathfrak h\to\mathbb C^I$ by $\rho(x)=(\alpha_i(x))_{i\in I}$. By [F1], $\rho$ is onto and $\rho(H)=\operatorname{im}(A^{\mathsf T})$ of dimension $r$. For the set $J$ in [F4], projection of this image to $\mathbb C^J$ is an isomorphism: it is surjective because its restriction to the $J$-coordinate subspace has matrix $A_J^{\mathsf T}$, and both spaces have dimension $r$. Hence $\operatorname{im}(A^{\mathsf T})\cap\mathbb C^{I\setminus J}=0$. For each $j\notin J$, choose $D_j$ with $\rho(D_j)$ the $j$th coordinate vector. Their span intersects $H$ trivially, and its dimension $|I\setminus J|=|I|-r$ makes it a complement to $H$; the form normalization gives $(h_i|D_j)=\delta_{ij}/d_i$. If $r=|I|$ this is the empty complementary family and $\mathfrak h=H$. [F1, F4, construct]

1.2 By [F3], the invariant form has perfect opposite-root pairings and is nondegenerate on the Cartan subalgebra. Also $\mathfrak n^\pm$ are positively and negatively root-graded, respectively. [F2, F3, given]

1.3 For fixed $\beta=\sum_i m_i\alpha_i\in Q_+$, the degree-$\beta$ words in the finite simple-generator tensor algebra are finite in number, so the separate Serre presentations [F2] make $U(\mathfrak n^+)[\beta]$ finite-dimensional; the same argument applies to $U(\mathfrak n^-)[-\beta]$. The height-zero component is $\mathbb C1$ on both sides. [F2, given, algebra]

1.4 Each half is countably spanned by its finite bracket words. Enumerating those words by length and lexicographic order and retaining the first vectors outside the preceding span gives a countable ordered basis; applying [F5] provides the PBW basis and the symmetrization isomorphism for both halves. This construction uses no choice principle. [F2, F5, construct]

1.5 For $v_1,\ldots,v_m\in\mathfrak n^+$ and $w_1,\ldots,w_\ell\in\mathfrak n^-$, define a pairing on the symmetric algebras to be zero when $m\ne\ell$, and when $m=\ell$ put $\langle v_1\cdots v_m,w_1\cdots w_m\rangle_S=\frac1{m!}\sum_{\sigma\in S_m}\prod_{t=1}^m(v_t|w_{\sigma(t)})$, with the empty products paired as $1$. It is well defined under permutations of each list. [F3, given, construct]

1.6 In a fixed root degree $\beta$ and symmetric length $m$, only finitely many tuples of positive roots sum to $\beta$. The tensor-product pairings on each such tuple are perfect by [F3]; averaging over $S_m$ identifies coinvariants with invariants because $m!\ne0$ in $\mathbb C$, so the induced pairing on $S^m(\mathfrak n^+)[\beta]\times S^m(\mathfrak n^-)[-\beta]$ is perfect. Summing over the finitely many lengths $0\le m\le\operatorname{ht}(\beta)$ gives a perfect pairing on the full symmetric-algebra root components. [F3, given, algebra]

1.7 Let $\mathfrak h_0$ be a second copy of $\mathfrak h$ and define $B_{\mathfrak d}((x,a),(y,b))=\tfrac12((x|y)-(a|b))$ on $\mathfrak d=\mathfrak g\oplus\mathfrak h_0$ with the componentwise bracket. Jacobi holds componentwise, and [F3] makes this form invariant, symmetric and nondegenerate. The maps $\iota_+$ and $\iota_-$ in (ii) are Lie homomorphisms because $\mathfrak h$ is abelian and the bracket of two Borel elements has zero Cartan component. Their images are complementary: the positive and negative root components split by the triangular decomposition, and the two Cartan copies split into diagonal and antidiagonal subspaces. Each image is isotropic, since the invariant form is orthogonal between the Cartan and nonzero root spaces and vanishes on pairs of positive roots or on pairs of negative roots. The cross pairing is $ (h|h')+\tfrac12(x_+|x_-)$; it is degreewise perfect by [F3]. Within either Borel, a degree has only finitely many decompositions into degrees in its root cone, and all pieces are finite-dimensional. Thus these images satisfy the same-side finiteness required of the root-graded Manin triple; the whole double need not have finite decompositions. [F2, F3, given, algebra]

2.1 Transport the invariant-form symmetric-power pairing of steps 1.5–1.6 through the PBW symmetrization isomorphisms of step 1.4. They preserve root degree, so they give a perfect pairing of $U(\mathfrak n^+)[\beta]$ with $U(\mathfrak n^-)[-\beta]$ for every $\beta\in Q_+$. Taking the direct sum of these finite-dimensional dualities gives the restricted graded-dual isomorphism in (i), in both directions; at $\beta=0$ it is the pairing $\langle1,1\rangle=1$. [F5, step 1.3, step 1.4, step 1.5, step 1.6, algebra]

3.1 By [F6], the transposed brackets give dual Lie bialgebra structures on the two Borel copies. For $h\in\mathfrak h$, every bracket of two elements of $\mathfrak b^-$ has either negative root degree or is zero in degree zero, so its cross pairing with $\iota_+(h)$ vanishes; hence $\delta^+(h)=0$. The same argument gives $\delta^-(h)=0$. For a Cartan vector $h$, the determinant pairing gives $\langle e_i\wedge h_i,f_i\wedge h\rangle=\alpha_i(h)/(2d_i^2)$, whereas $\langle e_i,[f_i,h]\rangle=\alpha_i(h)/(2d_i)$. There are no other possible degree decompositions of the simple root except its simple-root and Cartan parts. Hence transposition gives $\delta^+(e_i)=d_i e_i\wedge h_i$, proving (ii) with the normalization used by the formal shuffle coproduct. [F3, F6, step 1.7, algebra] ∎
## Remarks

The pairing on enveloping algebras in (i) is transported from symmetric
algebras by PBW symmetrization. It is not asserted to satisfy Hopf-pairing
adjunction for the standard primitive coproducts. Indeed, in type $A_2$ let
$e_{12}=[e_1,e_2]$ and $f_{12}=[f_2,f_1]$. The primitive coproduct gives
$\Delta(f_{12})=f_{12}\otimes1+1\otimes f_{12}$, so any Hopf pairing with
$\langle e_i,1\rangle=\langle1,e_i\rangle=0$ and
$\langle xy,z\rangle=\langle x\otimes y,\Delta z\rangle$ would force both
$\langle e_1e_2,f_{12}\rangle$ and
$\langle e_2e_1,f_{12}\rangle$ to vanish. It would then give
$\langle e_{12},f_{12}\rangle=0$, contrary to the perfect opposite-root
pairing in [F3].
