---
id: lem-equivariant-symbol-chern-character-pushforward
kind: lemma
title: "Trace-weighted compact symbol character and the cotangent pushforward"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-symbol-index
deps:
  - def-equivariant-compact-symbol-k-theory
  - thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero
  - lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations
  - thm-complex-spinc-thom-orientation
  - thm-homotopy-invariance-of-vector-bundle-pullback
  - thm-complex-splitting-principle-with-integral-injective-pullback
  - thm-first-chern-class-classifies-complex-line-bundles
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
  - thm-thom-isomorphism-for-oriented-vector-bundles
  - thm-external-product-and-whitney-sum-formulas-for-thom-classes
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - def-relative-fundamental-class-and-boundary-orientation
  - def-axiom-of-choice
dependency_roles:
  def-equivariant-compact-symbol-k-theory: mathematical-premise
  thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero: mathematical-premise
  lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations: mathematical-premise
  thm-complex-spinc-thom-orientation: mathematical-premise
  thm-homotopy-invariance-of-vector-bundle-pullback: mathematical-premise
  thm-complex-splitting-principle-with-integral-injective-pullback: mathematical-premise
  thm-first-chern-class-classifies-complex-line-bundles: mathematical-premise
  lem-integral-cohomology-ring-of-complex-projective-space-by-splitting: mathematical-premise
  thm-thom-isomorphism-for-oriented-vector-bundles: mathematical-premise
  thm-external-product-and-whitney-sum-formulas-for-thom-classes: mathematical-premise
  lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice: mathematical-premise
  def-relative-fundamental-class-and-boundary-orientation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "M. F. Atiyah and I. M. Singer, The Index of Elliptic Operators: I"
      url: "https://doi.org/10.2307/1970715"
    - title: "Peter B. Gilkey, Invariance Theory, the Heat Equation, and the
        Atiyah-Singer Index Theorem, first edition, §4.4"
      url: "https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf"
    - title: "James L. Heitsch, The Lefschetz Principle, Fixed Point Theory, and Index
        Theory, Theorem 2.1"
      url: "https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf"
dependency_level: 1
---

## Statement

Assume AC. Let $T=(\mathbb R/\mathbb Z)^r$, where $r\ge0$, act smoothly on a compact smooth manifold $F$ without boundary, possibly disconnected and nonorientable. Fix $h\in T$ whose action on $F$ is the identity. All vector bundles below have finite complex rank and continuous $T$-linearizations; use $T$-invariant Hermitian metrics. The induced $h$-action on each bundle then covers the identity and is unitary. Put $n=\dim F$ componentwise and let $\pi:T^*F\to F$ be the cotangent projection. For a compact space $Y$ of finite CW homotopy type, choose a homotopy equivalence $f:C\to Y$ from a finite CW complex and define the ordinary character on $Y$ by $\operatorname{ch}_Y(v)=(f^*)^{-1}\operatorname{ch}_C(f^*v)$. For a compact pair $(Y,Z)$ admitting a finite CW pair model, choose a homotopy equivalence of pairs $f:(C,D)\to(Y,Z)$ and define $\operatorname{ch}_{(Y,Z)}(v)=(f^*)^{-1}\operatorname{ch}_{(C,D)}(f^*v)$. The inverse $f^*$ here is the cohomology isomorphism; the inner pullback is in bundle K-theory. These definitions are independent of the models, as proved below. Compact smooth bases have such models; disk/sphere bundle pairs have finite pair models by pulling the bundle to a finite base model and attaching its disk fibers over the finitely many cells. Define $\operatorname{ch}_c$ on $T^*F$ using this relative character on a closed disk/sphere pair $(D_R(T^*F),S_R(T^*F))$ containing the symbol support in its interior, then its image in compact-support cohomology under excision. Radii are identified by radial deformation and extension, so this defines one class. Chern classes used below, and hence the Todd polynomials in them, are transported by the same inverse-cohomology-pullback convention. Follow all rational characters by $\mathbb Q\hookrightarrow\mathbb C$ when taking weighted sums.

For an equivariant vector bundle $W\to F$, define $(W_\lambda)_x=\ker(h|_{W_x}-\lambda I)$ for each eigenvalue $\lambda$ of $h$. These are $T$-equivariant subbundles: the compact closure of $\langle h\rangle$ acts trivially on $F$, and averaging over its characters gives continuous eigenprojections of locally constant rank. Compactness of $F$ makes the total eigenvalue list finite. For an absolute equivariant virtual bundle $V\in K_T^0(F)$, set

$$\operatorname{ch}_h(V)=\sum_\lambda\lambda\,\operatorname{ch}(V_\lambda)\in H^{\mathrm{even}}(F;\mathbb C),$$

where the sum is extended additively from actual bundles to virtual classes, and $\operatorname{ch}$ denotes the ordinary rational Chern character followed by the coefficient inclusion $\mathbb Q\hookrightarrow\mathbb C$. For a compact-support symbol class $a$ on $T^*F$, whose symbol bundles and map are $T$-equivariant, define its trace-weighted compact-support Chern character by

$$\operatorname{ch}_{h,c}(a)=\sum_{\lambda}\lambda\,\operatorname{ch}_c(a_\lambda)\in H_c^{\mathrm{even}}(T^*F;\mathbb C),$$

where $a_\lambda$ is its symbol class on the $\lambda$-eigenbundles of $h$. The sum is finite on each compact disk-bundle representative; it is extended linearly to virtual classes. Here $\operatorname{ch}_c$ is the relative topological Chern character, not the Chern character of the alternating bundle restricted to the zero section.

Fix the following cotangent orientation and Bott normalization. If $\theta=\sum_j\xi_jdx_j$ is the tautological one-form, orient $T^*F$ by $(d\theta)^n/n!$, namely by $d\xi_1\wedge dx_1\wedge\cdots\wedge d\xi_n\wedge dx_n$. The plane Bott class is the even-to-odd symbol $z:\mathbb C\to\mathbb C$ on the plane $z=x+i\xi$, with its relative-triple convention corresponding to $[\gamma]-1$ for the tautological Hopf line. Write $p_{F,!}:K_c^0(T^*F)\to\mathbb Z$ for the embedding construction: use this Bott Thom class on the doubled real normal bundle of an embedding $F\hookrightarrow\mathbb R^N$, extend by zero into $T^*\mathbb R^N$, and invert the same plane Bott external product on $T^*\mathbb R^N$. Its trace-weighted extension is $p_{F,!,h}(a)=\sum_\lambda\lambda p_{F,!}(a_\lambda)$. Then

$$p_{F,!,h}(a)=\int_{T^*F}\operatorname{ch}_{h,c}(a)\,\pi^*\operatorname{Td}(TF\otimes_{\mathbb R}\mathbb C).$$

For a degree-$2n$ compact-support cohomology class, the integral means its pairing with the relative fundamental class $[D_R(T^*F),S_R(T^*F)]$, using a radius $R$ containing its support in the disk interior, excision and the indicated orientation of the total space. Only the degree-$2n$ part is paired, and components are summed. This definition uses an orientation of the cotangent total space and requires no orientation of $F$.

The Todd class of a complex bundle with formal Chern roots $x_j$ means $\prod_j x_j/(1-e^{-x_j})$, expanded only through the dimension of the base. The integer construction is independent of the chosen embedding and tubular data. Put $S_h=\{s\in R(T):s(h)\ne0\}$. On $S_h^{-1}K^0_{T,c}(T^*F)$, extend $p_{F,!,h}$ by the unique linear map to $\mathbb C$ for which $s\in R(T)$ acts on the target by multiplication by $s(h)$; denote this extension by $p_{F,!,h}$ as well.

For the fixed-component specialization, take $h=g$. Let the same torus $T$ act smoothly on a compact smooth manifold $M$ without boundary, choose a $T$-invariant metric, and fix $g\in T$. Let $F$ be a connected component of $M^g$, let $\nu=(TF)^\perp\subset TM|_F$ be its real normal bundle, and define $i:T^*F\hookrightarrow T^*M$ by extending each covector by zero on $\nu$. Put $e_g=\lambda_{-1}(\nu_{\mathbb C}^*)\in K_T^0(F)$ and $S_g=\{s\in R(T):s(g)\ne0\}$. The degree-zero component of $\operatorname{ch}_g(e_g)$ at $x\in F$ is $\det_{\mathbb C}(I-g|_{\nu_{\mathbb C,x}^*})=\det_{\mathbb R}(I-g|_{\nu_x})\ne0$; its positive-degree part is nilpotent, so $\operatorname{ch}_g(e_g)$ is invertible in $H^{\mathrm{even}}(F;\mathbb C)$. Let $\sigma\in K^0_{T,c}(T^*M)$ be any compact elliptic symbol class. Whenever the representation-localized group supplies $b\in S_g^{-1}K^0_{T,c}(T^*F)$ satisfying $\pi^*e_g\cdot b=i^*\sigma$, one has

$$p_{F,!,g}(b)=\int_{T^*F}\frac{\operatorname{ch}_{g,c}(i^*\sigma)}{\pi^*\operatorname{ch}_g(e_g)}\,\pi^*\operatorname{Td}(TF_{\mathbb C}).$$

This is the characteristic-class comparison for a fixed component. It applies to the compact symbol of a general first-order elliptic complex after forming its even-to-odd elliptic symbol. It does not assert localization of equivariant K-theory or equality of analytic and topological indices; those are separate prerequisites for identifying the sum of these expressions with an analytic character. With the other common cotangent symplectic convention $-d\theta$, both displayed integrals acquire the factor $(-1)^n$.

## Statement references

[[def-equivariant-compact-symbol-k-theory]]

[[thm-complex-spinc-thom-orientation]]

[Gilkey, first edition, §4.4: the explicit cotangent orientation convention](https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf)

[Heitsch, Theorem 2.1: ordinary elliptic-symbol index formula with its displayed dimension sign](https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf)

## Facts & Assumptions

**Given:** The compact manifolds, symbols, torus-induced unitary actions and orientation convention in the Statement. AC is assumed through the topological suppliers.

[F1] The compact symbol and the exterior-algebra Bott symbol are the triples of [[def-equivariant-compact-symbol-k-theory]]. On a complex bundle $W$, the latter uses $\Lambda^\bullet W$ and exterior multiplication by the tautological vector plus its adjoint; its plane map is $z$ and its zero-section class is $\lambda_{-1}(W)$. The real metric identifies $\nu_{\mathbb C}$ with its complex-linear dual equivariantly, so $\lambda_{-1}(\nu_{\mathbb C})=\lambda_{-1}(\nu_{\mathbb C}^*)$.

[F2] The ordinary Chern character is a natural ring homomorphism, and the relative character is natural on finite pairs and compatible with suspension. [[thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero]] [[lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations]]

[F3] For a given Spin-c lift, its spinor symbol has plane class $[\gamma]-1$, is multiplicative for the direct-sum lift, and gives a Thom isomorphism for finite CW pairs. Step 1.2 constructs the applicable unitary Spin-c lift and identifies its symbol with the exterior-algebra symbol. [[thm-complex-spinc-thom-orientation]]

[F4] Complex bundles admit a flag splitting space with injective rational cohomology pullback: rational injectivity follows by rational Leray--Hirsch at each projective stage, as established explicitly in the proof of [[thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero]], rather than by inferring it from the integral splitting-principle interface. Complex lines are classified by the universal line, and $H^*(\mathbb{CP}^k;\mathbb Q)=\mathbb Q[x]/(x^{k+1})$ with $x=c_1(\gamma)$. [[thm-complex-splitting-principle-with-integral-injective-pullback]] [[thm-first-chern-class-classifies-complex-line-bundles]] [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]

[F5] Normalized cohomological Thom classes exist, their multiplication is an isomorphism, and they are natural and multiplicative for ordered sums. Their zero-section pullback is the Euler class; for a complex line this is $c_1$. [[thm-thom-isomorphism-for-oriented-vector-bundles]] [[thm-external-product-and-whitney-sum-formulas-for-thom-classes]]

[F6] Compact smooth manifolds have finite CW models, so their vector-bundle disk/sphere pairs have finite CW models as well, by the finite cellwise Thom construction. [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]]

[F7] Pullback of a finite-rank numerable bundle along a homotopy on a paracompact Hausdorff base gives isomorphic endpoint bundles. [[thm-homotopy-invariance-of-vector-bundle-pullback]]

[F8] An oriented compact manifold with boundary has a unique relative fundamental class restricting to its prescribed local generators. Pairing with it defines the compact-support integral through the disk pair; excision and the pair maps identify the pairings for larger radii. [[def-relative-fundamental-class-and-boundary-orientation]]

[A1] Full AC is inherited from these suppliers. [[def-axiom-of-choice]]

## Proof

**Proof technique:** Compute the ordinary Thom Chern character on universal lines, descend by splitting, apply it to the doubled real normal of an embedding, and then take the trace on eigenbundles.

**Given:** The data in the Statement and the normalizations in [F1]–[F6].

1.1 The transport in the Statement is independent of the finite model. Indeed let $f:(C,D)\to(Y,Z)$ and $f':(C',D')\to(Y,Z)$ be two pair equivalences, and let $g$ be a pair homotopy inverse of $f$. Then $u=gf':(C',D')\to(C,D)$ satisfies $fu\simeq f'$ as pair maps. Bundle pullback along homotopies agrees by [F7], also on relative classes by applying it to the based quotient and its trivialized basepoint. Singular cohomology pullbacks agree because the prism operator for a homotopy satisfies $\partial P+P\partial=f_{1\#}-f_{0\#}$, also modulo the subspace chains. Thus [F2]'s naturality on finite pairs gives $f'^*(f^*)^{-1}\operatorname{ch}(f^*v)=u^*\operatorname{ch}(f^*v)=\operatorname{ch}(f'^*v)$, proving equality of the transported characters. The absolute case takes the subspaces empty. For a map between modeled pairs, compose it with a source model and a target homotopy inverse; this same calculation proves naturality. Taking product models proves the product identities. The same argument applies to the natural Chern-class polynomials defining the Todd class. A compact symbol on a vector bundle over a compact base can be restricted to a closed disk containing its noninvertibility set and radially identified with the disk/sphere pair. Radial contraction of the disk onto its zero section and [F7] identify both bundles there with pullbacks of bundles on the compact base. Its relative K-class is obtained by clutching its two bundles along the sphere using the boundary isomorphism. To see this in the based-quotient model, double the disk, glue the first bundle on its positive half to the second on its negative half, and subtract the doubled second bundle. Add a complement of the second bundle pulled back from the base, so the resulting bundle is trivialized on the negative disk; collapsing that disk gives a reduced virtual bundle on the Thom quotient. Such a complement exists: finitely many local frames and a subordinate partition of unity embed a bundle in a finite trivial bundle, and its orthogonal complement supplies it. Different complements have a common stabilization, and changing the radius or boundary collar gives a homotopy. Conversely, pull a reduced bundle on the quotient back to the positive disk with its boundary trivialization. These operations are inverse after adding elementary triples: the negative half is precisely the trivialized summand removed in the collapse. Thus the ordinary compact triple character used here is [F2]'s relative character, and it respects pullback, extension by zero and products. For products the clutching construction gives tensor products of the resulting reduced virtual bundles; hence [F2]'s ring identity gives the relative product identity. [F1, F2, F6, F7, construct]

1.2 On $\Lambda^\bullet\mathbb C^r$ put $c(v)=\varepsilon_v-\varepsilon_v^*$ for real $v\in\mathbb C^r$. These are skew-adjoint Clifford matrices; for a unitary basis their two-dimensional factors are exactly the matrices in [F3]'s supplier, and their graded tensors span the full matrix algebra. The action $\Lambda^\bullet u$ of $u\in U(r)$ preserves grading and conjugates $c(v)$ to $c(uv)$. Choose either spin lift $s$ of the realification of $u$. The operator $(\Lambda^\bullet u)\rho(s)^{-1}$ commutes with every Clifford matrix, hence is a unit scalar $z$. Replacing $s$ by $-s$ replaces $z$ by $-z$, so $u\mapsto[s,z]\in\operatorname{Spin}^c(2r)$ is well-defined; local continuous lifts to the spin double cover show continuity, and multiplication of the implementing matrices proves it is a homomorphism. Thus the unitary frame bundle of $W$ induces a specified Spin-c lift whose associated spinor bundle is $\Lambda^\bullet W$. Its Clifford symbol is isomorphic as a relative triple to $D=\varepsilon_v+\varepsilon_v^*$: multiply degree $2j$ in the source by $(-1)^j$ and degree $2j+1$ in the target by $(-1)^j$; exterior multiplication is unchanged and contraction changes sign. In rank zero use the trivial lift and the even line. Therefore [F3] applies to the exact exterior symbol in [F1], with its plane map $z$ and its direct-sum product. [F1, F3, construct, algebra]

1.3 Choose a smooth embedding $f:F\hookrightarrow\mathbb R^N$ and its normal bundle $V$. Such an embedding can be constructed from finitely many coordinate charts and bump functions: take the vector of all functions $\phi_\alpha$ and $\phi_\alpha x_{\alpha,j}$, where the $\phi_\alpha$ are supported inside charts and their positive sets cover $F$. Equality of these vectors determines a common chart with $\phi_\alpha>0$ and then its coordinates, giving injectivity; differentiating the same coordinates shows injectivity of the derivative. Compactness makes it an embedding. An ambient metric splits $f^*T\mathbb R^N=TF\oplus V$ and embeds $T^*F$ into $T^*\mathbb R^N$ by zero normal covector. Its normal bundle, pulled back to $T^*F$, is $V\oplus V^*$: a connection splits horizontal and vertical tangent directions, and the two missing directions are the normal base vector and normal covector. Homotopies of the connection preserve this identification. At the zero section the cotangent symplectic form is the direct sum of the forms on $TF\oplus T^*F$ and $V\oplus V^*$; their symplectic orientations therefore multiply. Fiber dilation contracts $T^*F$ onto its zero section and preserves nondegeneracy, so the same orientation identity holds everywhere. [given, construct, algebra]

2.1 Let $L$ be a complex line, $x=c_1(L)$, $u_L$ its complex-oriented cohomological Thom class, and $\tau_L$ the plane-normalized Bott symbol [F3]. Thom isomorphism uniquely writes $\operatorname{ch}_c(\tau_L)=u_L A(L)$. The zero-section identity gives $x A(L)=1-e^x$. This equation alone cannot be divided by $x$ on an arbitrary base. Instead apply it to the tautological line on $\mathbb{CP}^k$: for each coefficient through degree $2k-2$, multiplication by $x$ is injective by [F4], so $A(\gamma)=(1-e^x)/x$ through that degree. For any prescribed finite degree choose the stage one degree higher. Compatibility under stage restriction determines every required coefficient, including the constant $-1$. A line on each connected component of a finite CW base is pulled back from a sufficiently large finite stage of its classifying map, so naturality gives the following formula on each component:
$$\operatorname{ch}_c(\tau_L)=-u_L e^x\operatorname{Td}(L)^{-1}.$$
This also verifies the sign: on a complex-oriented plane the compact character of the prescribed Bott generator integrates to $-1$. [F2, F3, F4, F5, step 1.1, algebra]

3.1 For a rank-$r$ complex bundle $W$, apply [F4] separately to each of the finitely many connected components of the compact base and pull to its flag splitting space. There $W=\bigoplus_jL_j$, and [F3], [F5] and the product identity in step 1.1 give
$$\operatorname{ch}_c(\tau_W)=(-1)^r u_W e^{c_1(W)}\operatorname{Td}(W)^{-1}.$$
Indeed multiplication of the line formulas gives the displayed factor, the sum of the line first Chern classes is $c_1(W)$, and the product of their Todd factors defines the Todd class. To descend, first write the left-hand side as $u_W A(W)$ by the ordinary Thom isomorphism. Pullback preserves $u_W$, and [F4]'s rational injectivity identifies the unique coefficient $A(W)$ with the displayed symmetric series. This proves the formula on the base, including rank zero. [F2, F3, F4, F5, step 1.1, step 2.1, algebra]

4.1 Let $V$ be a real rank-$r$ metric bundle and identify its double $V\oplus V^*$ with $V_{\mathbb C}$ by $(v,\eta)\mapsto v+i\eta^\sharp$. The real structure identifies $V_{\mathbb C}$ with its complex conjugate. Consequently $2c_1(V_{\mathbb C})=0$ and $c_1(V_{\mathbb C})=0$ rationally. The complex orientation is $dv_1\wedge d\eta_1\wedge\cdots\wedge dv_r\wedge d\eta_r$, while the cotangent normal orientation is $d\eta_1\wedge dv_1\wedge\cdots\wedge d\eta_r\wedge dv_r$; their ratio is $(-1)^r$. If $u_-$ denotes the latter Thom class, step 3.1 therefore becomes
$$\operatorname{ch}_c(\tau_{V_{\mathbb C}})=u_-\operatorname{Td}(V_{\mathbb C})^{-1}.$$
All formulas are invariant under real orthogonal frame changes: their doubled real determinant is positive. Thus they apply without an orientation on $V$ or on its base. [F1, F5, step 3.1, algebra]

5.1 Form $j_!(a)$ by pulling $a$ to that normal bundle, multiplying by $\tau_{V_{\mathbb C}}$, and extending from a tubular neighborhood by zero. A tubular neighborhood exists here directly from the ambient Euclidean normal map: its derivative at the zero section is invertible; the inverse function theorem and compactness of the part of the zero section meeting the support give an injective sufficiently small neighborhood. Shrinking that neighborhood changes its collapse by a radial homotopy. Step 1.1 and step 4.1 give
$$\operatorname{ch}_c(j_!a)=j_*\bigl(\operatorname{ch}_c(a)\,\pi^*\operatorname{Td}(V_{\mathbb C})^{-1}\bigr),$$
where $j_*$ means multiplication by $u_-$ and extension by zero in ordinary compact-support cohomology. For the pairing in [F8], $\int j_*\alpha=\int\alpha$: subdivide a relative fundamental cycle subordinate to normal trivializing neighborhoods, and apply the relative cup-cap pairing on each product disk. The ordered normal Thom generator evaluates to $1$ on its normal disk by normalization, leaving the corresponding tangent coefficient; summing these coefficients gives the original pairing. The local generators of the total fundamental class are exactly these ordered products by step 1.3. Thus this is a cohomological fundamental-class pairing and requires no implicit de Rham comparison. This argument also works for virtual classes and for nonorientable $F$, since its cotangent orientation is global. [F2, F5, F8, step 1.1, step 1.3, step 4.1, construct]

6.1 By [F3], $K_c^0(T^*\mathbb R^N)$ is the infinite cyclic group generated by the $N$-fold plane Bott product, whose character integrates to $1$ with the $d\theta$ orientation: each factor has complex-oriented integral $-1$ by step 2.1, and reversing each of the $N$ plane orientations supplies another $(-1)^N$. Thus the integer coefficient of $j_!a$ in this generator is its integrated compact character. Since $TF_{\mathbb C}\oplus V_{\mathbb C}$ is trivial, multiplicativity of the Todd series gives $\operatorname{Td}(V_{\mathbb C})^{-1}=\operatorname{Td}(TF_{\mathbb C})$. Integrating step 5.1 proves the first formula for the ordinary class $a$. Its right-hand side uses no embedding or tubular data, so the integer defined by any such construction is independent of those choices. [F3, step 2.1, step 5.1, algebra]

7.1 Put $H=\overline{\langle h\rangle}$ in the acting torus. Since $h$ fixes every point of $F$, continuity makes $H$ act trivially on $F$, hence on $T^*F$. On a compact disk-bundle representative each bundle has only finitely many $H$-weights. Here is a local justification of the finiteness assertion: in a unitary local frame the character is a continuous function of the base point, uniformly on the compact group $H$; its Fourier coefficients are the integer multiplicities of characters. Close base points have uniformly close characters and hence all multiplicities equal, because the coefficient differences have absolute value less than $1$. The weight list is locally constant and the disk has finitely many components. The weight projections are the integrals of the action against the conjugate characters, so are continuous projections of locally constant rank and define eigenbundles. Every equivariant symbol map preserves them. Direct sums, homotopies and elementary triples preserve the resulting weighted ordinary K-class, so $\operatorname{ch}_{h,c}$ is well-defined. Tensoring eigenbundles multiplies eigenvalues, and [F2] gives multiplicativity with an absolute bundle class. Weightwise application of step 6.1 proves the trace-weighted formula. Its degree-zero value on a bundle over a point is $\operatorname{tr}(h)$, whereas the ordinary Chern character's degree-zero value is its dimension; thus a degree-zero Borel rank cannot replace this operation. [F1, F2, step 6.1, construct, algebra]

8.1 On $F\subset M^g$, the fixed subspace of $dg$ is $TF$; the invariant metric gives an orthogonal splitting $TM|_F=TF\oplus\nu$ and no $1$-eigenvector in $\nu$. The exterior-power identity in [F1] gives the degree-zero term
$$\operatorname{ch}_g(e_g)_{[0]}=\det_{\mathbb C}(I-g|_{\nu_{\mathbb C}^*})=\det_{\mathbb R}(I-g|_\nu)>0.$$
In the finite-dimensional cohomology ring of $F$, all positive-degree classes are nilpotent. Writing $\operatorname{ch}_g(e_g)=c+u$ with $c$ the nonzero locally constant term, its inverse is the finite geometric sum $c^{-1}\sum_{k\ge0}(-u/c)^k$. Similarly a representation $s$ of nonzero character acts under step 7.1 as the invertible scalar $\chi_s(g)$, so both the weighted character and the weighted pushforward extend by division by this scalar to representation localization. For a localized K-class $b$ with $\pi^*e_g\cdot b=i^*\sigma$, naturality in [F2] and the relative product identity in step 7.1 give $\operatorname{ch}_{g,c}(i^*\sigma)=\pi^*\operatorname{ch}_g(e_g)\,\operatorname{ch}_{g,c}(b)$ on $T^*F$. Pullback preserves the inverse of $\operatorname{ch}_g(e_g)$, so $\operatorname{ch}_{g,c}(b)=\operatorname{ch}_{g,c}(i^*\sigma)/(\pi^*\operatorname{ch}_g(e_g))$. Substitution in step 7.1 proves the second displayed formula whenever the localized quotient exists. In particular it applies to the quotient furnished by a separately proved K-localization theorem; no such theorem was used to prove this comparison. [F1, F2, step 7.1, algebra]

9.1 For an elliptic complex, let $s$ be its symbol differential at a nonzero real covector. Exactness implies that $s+s^*$ has zero kernel: its square is $ss^*+s^*s$, whose quadratic form is $\|su\|^2+\|s^*u\|^2$, and an element killed by both is an element of $\ker s$ orthogonal to $\operatorname{im}s=\ker s$. Thus its even-to-odd block is invertible and defines the same compact-support construction, with no Dirac or isolated-point restriction. A zero-dimensional $F$ has $T^*F=F$, positive point orientations and Todd class $1$, so the integral is the finite fiber trace sum. Finally $(-d\theta)^n=(-1)^n(d\theta)^n$, proving the stated change-of-convention factor. These observations include the empty manifold, zero symbols and rank-zero normals. AC has been used only through the listed topological suppliers and finite smooth bundle constructions. [A1, F1, step 7.1, step 8.1, algebra] ∎

## Remarks

The ordinary Thom comparison and the trace weighting are proved here. To obtain an equivariant analytic fixed-component index theorem one still needs (i) an equivariant compact-support K-localization theorem giving the normal inverse and compatibility of the topological pushforward, and (ii) equality of the equivariant analytic index with that pushforward for general elliptic symbols. The ordinary Spin-c Thom theorem and a Dirac index formula alone do not prove (ii).

Gilkey uses $dx_1\wedge d\xi_1\wedge\cdots\wedge dx_n\wedge d\xi_n$ as the cotangent symplectic orientation in §4.4; the accompanying dimension sign is essential when converting to that convention. Heitsch's Theorem 2.1 displays $(-1)^n$ in its ordinary symbol formula. These source comparisons fix conventions; they are not premises replacing the Thom computation above.
