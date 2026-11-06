---
id: lem-gts-ramified-finite-map-induced-stability
kind: lemma
title: Ramified finite-flat induction of stability and the elliptic double cover
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
  - lem-gts-compact-adjoint-induced-stability
  - def-gts-bridgeland-stability-condition-with-support-property
  - thm-affine-quasi-coherent-equivalence
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - lem-eventual-global-generation-coherent-twists
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - thm-smooth-local-standard-form
  - lem-flat-local-ascent-of-regularity
  - def-axiom-of-choice
dependency_roles:
  lem-gts-compact-adjoint-induced-stability: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  thm-affine-quasi-coherent-equivalence: mathematical-premise
  thm-qc-sheaf-affine-higher-cohomology-vanishes: mathematical-premise
  thm-cech-computes-qc-cohomology-separated-scheme-affine-cover: mathematical-premise
  thm-coherent-sheaves-abelian-noetherian-scheme: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  thm-localisation-and-polynomial-extension-of-regular-rings: mathematical-premise
  thm-smooth-local-standard-form: mathematical-premise
  lem-flat-local-ascent-of-regularity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Chunyi Li, A remark on stability conditions on smooth projective varieties
      url: https://arxiv.org/pdf/2601.22994v1
      locator: Section 3, corrected Proposition 3.4, and Lemma 6.1; the adjoints, geometric hypotheses and ramified kernel are reconstructed here.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 2
---

## Statement

Assume AC. Let $f:Y\to X$ be finite faithfully flat between smooth projective complex varieties. Write $B=f_*\mathcal O_Y$ and suppose $\omega_f=\mathcal Hom_X(B,\mathcal O_X)$, viewed as a $B$-module, is invertible. (It suffices that, locally on $X$, $B$ is a tower of monic one-variable quotient algebras.) Let $(Z,P)$ be a locally finite support-property stability condition on $D^b(Y)$ such that
$$Lf^* f_*P(\theta)\subset P(( -\infty,\theta])\quad\text{for all }\theta\in\mathbb R.$$
Then $f_\sharp P(\theta)=\{E\in D^b(X):Lf^*E\in P(\theta)\}$ and $f_\sharp Z=Z\circ v\circ Lf^*$ define a locally finite support-property stability condition on $X$, with heart the inverse image of the source heart, HN factors detected by $Lf^*$, and lattice exactly $\operatorname{im}(vLf^*)$.

In particular let $E\to\mathbb P^1$ be a smooth connected double cover given by $\mathcal O\oplus\mathcal O(-2)$ with multiplication from a quartic with four distinct zeroes, let $\tau$ be its deck involution, let $M$ be smooth projective, and set $Y=E\times M$, $X=\mathbb P^1\times M$, $f=\pi_E\times1$. Let $D$ be its reduced ramification divisor (the four ramification points times $M$). If $\tau^*P(\theta)=P(\theta)$ and every $G\in P(\theta)$ satisfies $G\otimes\mathcal O_Y(-D)\in P(( -\infty,\theta])$, then the stated induced stability condition on $X$ exists. Ramification is allowed at every point of $D$.

The same compact induction helper applies to any finite closed immersion $i:V\hookrightarrow W$ between smooth projective varieties with $F=i_*$, $L=Li^*$, if $i_*Li^*P(\theta)\subset P([\theta,+\infty))$. For this application its lattice is $\operatorname{im}(v i_*)$.

## Statement references

[[lem-gts-compact-adjoint-induced-stability]]

## Facts & Assumptions

**Given:** The maps and stability conditions in the Statement. $D^b(V)$ means bounded coherent complexes. The ambient category used in compact induction is the unbounded quasicoherent derived category; coproducts and telescope cones are taken on complexes. All affine calculations below are compatible with localization and hence glue.

[F1] [[thm-affine-quasi-coherent-equivalence]] identifies affine quasicoherent sheaves with modules; [[thm-qc-sheaf-affine-higher-cohomology-vanishes]] gives their positive-degree affine acyclicity. [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]] computes cohomology by a finite affine Čech cover on our separated projective schemes.

[F2] [[thm-coherent-sheaves-abelian-noetherian-scheme]] gives coherent kernels. [[lem-eventual-global-generation-coherent-twists]] gives surjections from finite sums of sufficiently negative ample twists onto coherent sheaves. [[thm-localisation-and-polynomial-extension-of-regular-rings]] gives finite global dimension of regular finite-dimensional affine rings. [[thm-smooth-local-standard-form]] and [[lem-flat-local-ascent-of-regularity]] make our smooth complex local rings regular: an étale chart over affine space is flat with regular zero-dimensional fibres, so apply flat-local regularity ascent.

[F3] [[lem-gts-compact-adjoint-induced-stability]] supplies the proved compact-cellular construction and its complete stability conclusion, provided its ambient, reflection and adjoint hypotheses are verified. [[def-axiom-of-choice]] is retained throughout.

## Proof

1.1 **Acyclicity and compactness.** For a finite morphism, inverse images of affine opens are affine. Under the affine module equivalence, $f_*$ is restriction of scalars, hence exact on quasicoherent sheaves, commutes with coproducts, and has no positive derived images. These assertions hold on every target affine open by F1, not by an unsupported claim that every proper pushforward is acyclic. For a finite locally free map $Lf^*=f^*$ is exact and coproduct-preserving, since it is $B\otimes_A-$ on an affine chart. For a closed immersion $i_*$ is likewise exact restriction of scalars and commutes with coproducts. Termwise exact functors preserve quasi-isomorphisms and commute with the cone formula for telescopes; the usual derived tensor functor is computed by flat resolutions and is exact. [F1, given, algebra]

2.1 Every bounded coherent complex on a smooth projective $V$ has a bounded finite locally free resolution. For a coherent sheaf, use F2's global-generation surjection and repeat on its coherent kernel. After $d=\dim V$ steps the remaining kernel is locally projective, because every local ring is regular of global dimension at most $d$; the local syzygy criterion makes it locally free. Resolve finitely many coherent cohomology sheaves and take cones to handle a bounded complex. A bounded finite locally free complex $K$ is compact: $R\operatorname{Hom}(K,T)=R\Gamma(K^\vee\otimes T)$ is computed by a finite affine Čech complex. Each affine term commutes with coproducts, since finite-rank Hom and module localization do, and the horizontal Čech length is finite. Therefore its total complex and its degree-zero cohomology commute with coproducts. This argument works for unbounded $T$: the finite horizontal length avoids an infinite product totalization or convergence assumption. For two bounded coherent complexes the same finite locally free/Čech Hom calculation computes their morphisms in both the bounded coherent localization and the ambient quasicoherent model; resolving on the affine intersections and totalizing the finite Čech resolution gives the comparison explicitly. Thus $D^b(V)$ is a full triangulated subcategory of the ambient model. Telescope triangles and exactness of telescopes follow directly from the cone-of-$1-\mathrm{shift}$ construction on complexes, where coproducts are exact on affine modules. [F1, F2, step 1.1, algebra]

2.2 **Correct adjoints.** For finite locally free $A\to B$, set $B^\vee=\operatorname{Hom}_A(B,A)$, with action $(b\lambda)(c)=\lambda(bc)$. The RIGHT adjoint of $F=B\otimes_A-$ is restriction $R$. The LEFT adjoint is $L(G)=R(G\otimes_B B^\vee)$ when $B^\vee$ is an invertible $B$-module. Indeed the finite-projective tensor-Hom identity gives $\operatorname{Hom}_A(B,E)=B^\vee\otimes_A E$, so
$$\operatorname{Hom}_A(R(G\otimes_B B^\vee),E)=\operatorname{Hom}_B(G\otimes_B B^\vee,B^\vee\otimes_AE)=\operatorname{Hom}_B(G,B\otimes_AE).$$
These identities hold for derived Hom as well: $B$ is finite projective over $A$ and $B^\vee$ invertible over $B$, so the displayed functors are exact and compute their derived functors; the ordinary adjunctions on complexes therefore descend through quasi-isomorphisms. They localize, giving $L(G)=f_*(G\otimes\omega_f)$. This preserves bounded coherent complexes. If $B=A[t]/(p(t))$ for a monic polynomial of degree $r$, the functional taking the coefficient of $t^{r-1}$ gives a perfect $A$-pairing $(b,c)\mapsto\lambda(bc)$. Its matrix in $1,t,\ldots,t^{r-1}$ has zero entries when the two exponents sum to less than $r-1$, and ones on that anti-diagonal, so determinant $\pm1$. Thus $B^\vee$ is free of rank one over $B$. Composing these coefficient functionals proves the assertion for a tower of monic quotients. The resulting local generators differ by units of $B$, defining the asserted line $\omega_f$. [given, F1, step 1.1, algebra]

3.1 **Size/model convention.** The ambient sheaf-derived category is the quasicoherent derived model with its usual Hom sets; this does not mean the raw localization of a proper class is silently treated as small. One explicit construction uses a fixed finite affine cover and all its intersections: take complexes of modules on those finitely many rings with localization comparison quasi-isomorphisms and their coherent Čech descent data. Local derived morphisms have set-sized models obtained by semifree resolutions: adjoin shifted free generators mapping to cycles to surject on cohomology, then successively adjoin generators whose differentials kill every kernel cycle. Each cycle dies at a finite next stage, so the countable union is a quasi-isomorphic semifree complex; maps into an acyclic complex contract by choosing primitives inductively along this generator filtration. Thus its Hom complexes compute localization morphisms and are sets. The finitely many localization comparisons and their higher coherences are maps and homotopies in these same complexes, hence form sets too. The augmented Čech resolution glues this model to the sheaf model: its rows are locally the exact unit-ideal Čech resolution, and its finite horizontal totalization preserves quasi-isomorphisms. This establishes the needed locally small module/sheaf model, coproducts and finite-perfect compactness without a compact-generation or induced-t-structure input from a citation. The essentially small bounded coherent subcategory has a set of affine finite presentations and finite complexes, modulo the same set-sized replacement morphisms. [F1, step 2.1, construct]

3.2 **Conservativity and bounded reflection.** For faithfully flat $A\to B$, $H^j(FM)=B\otimes_AH^j(M)$. A module vanishes iff its faithfully flat tensor does. If $B\otimes_A N$ is finite over $B$, finitely many tensor expressions occurring in generators involve only finitely many elements of $N$; let $N_0$ be their $A$-span. Then $B\otimes_A(N/N_0)=0$, so $N=N_0$ is finite, hence coherent over Noetherian $A$. Apply this to each cohomology module. This proves $F^{-1}(D^b(Y))=D^b(X)$ and conservativity on the ambient category. For $i_*$ the same assertions are immediate: cohomology is unchanged as an underlying module under restriction, finite $B$-modules are finite $A$-modules, and an $A$-finite module carrying a $B=A/I$ action is finite over $B$. Also $Li^*$ sends bounded coherent complexes to bounded coherent complexes by the bounded locally free resolutions in step 2.1; tensor-Hom is the actual left adjunction $Li^*\dashv i_*$. These establish all geometric hypotheses of F3. [F1, F2, step 1.1, step 2.1, step 2.2, algebra]

3.3 **The genuinely ramified kernel.** The double cover in the Statement is finite locally free of degree two. On a trivialization of its covering line its algebra is $A[z]/(z^2-s)$, a monic algebra, so step 2.2 verifies its dual line condition even at $s=0$. After base change to the cover, its fibre-product algebra is $B[z']/((z'-z)(z'+z))$. Restriction to the identity graph $z'=z$ has kernel generated by $z'-z$. On the other graph $z'=-z$ this generator restricts to $-2z$. Multiplication by $z'-z$ identifies that kernel with the other graph's structure sheaf twisted by the Cartier divisor $z=0$: cancellation in the polynomial ring verifies the relation and injectivity, and $2$ is invertible. The zero scheme $z=0$ is exactly the ramification divisor $D$, and changes of the covering-line frame give exactly its divisor transition functions. Tensoring with the identity graph on $M$ therefore gives the global exact sequence
$$0\longrightarrow\mathcal O_{\mathrm{Gr}\tau}\otimes p_2^*\mathcal O_Y(-D)\longrightarrow\mathcal O_{Y\times_XY}\longrightarrow\mathcal O_{\Delta_Y}\longrightarrow0.$$
The four simple branch zeroes make $D$ reduced, but the sequence and finite-flat adjunction have not deleted them. [step 2.2, given, algebra, construct]

4.1 **Convert the useful inequality, with correctly typed categories.** Now $D_1=D^b(X)$, $D_2=D^b(Y)$, $F=f^*$, $R=f_*$ and $L=f_*(-\otimes\omega_f)$. For $E\in P(\theta)\subset D^b(Y)$ and $T\in P(( -\infty,\theta))$, adjunction twice gives
$$\operatorname{Hom}_{D^b(Y)}(FL(E),T)=\operatorname{Hom}_{D^b(X)}(L(E),R(T))=\operatorname{Hom}_{D^b(Y)}(E,FR(T))=0.$$
The last equality follows from the assumed $FR(P(\alpha))\subset P(\le\alpha)$ for each $\alpha<\theta$, extended over a finite HN filtration of $T$. Right orthogonality to $P(<\theta)$ says precisely $FL(E)\in P(\ge\theta)$: if its bottom HN factor had phase $<\theta$, the nonzero canonical map to the final low-phase HN piece would contradict that orthogonality. Thus F3 applies and gives the entire conclusion, including heart, HN closure, local finiteness and the actual image-lattice support estimate. For a closed immersion use the stated $i_*Li^*$ inequality directly with the adjunction of step 3.2. [F3, step 2.2, step 3.2, algebra]

5.1 The finite-flat base-change formula here is the elementary module identity $B\otimes_A R(G)=(B\otimes_A B)\otimes_B^{\mathbf L}G$. Tensor the sequence in step 3.3 derivedly with $p_1^*G$ and push along the finite projection $p_2$. There are no higher pushforwards by step 1.1. Its graph factors are derived-flat over the first copy of $Y$ because that graph projection is an isomorphism; equivalently a vector-bundle resolution of $G$ computes the tensor on either graph. We obtain the genuine triangle
$$\tau^*G\otimes\mathcal O_Y(-D)\longrightarrow f^*f_*G\longrightarrow G\longrightarrow(\tau^*G\otimes\mathcal O_Y(-D))[1].$$
For $G\in P(\theta)$ the two outer terms before the boundary lie in $P(\le\theta)$ by the assumed deck invariance and negative-twist phase bound. That subcategory is extension-closed, so $f^*f_*G\in P(\le\theta)$. Step 4.1 proves the desired induced condition. [F3, step 1.1, step 4.1, step 3.3, algebra] ∎

## Remarks

For the elliptic product construction one may choose any such smooth double cover and any ramification point as its origin; the deck involution is then $[-1]$. The phase bound for $D$ follows by composing the four coordinate point-divisor Bayer bounds supplied by the separate elliptic-product parameter lemma. The existing finite-étale lifting lemma cannot replace this argument: at $z=0$ the two graphs meet and $B\otimes_A B$ is not a disjoint sum of graph algebras. Printed Li Proposition 3.4 places $\sigma$ on $D^b(X)$ although its hypothesis and its support-lattice paragraph require $\sigma$ on $D^b(Y)$; the typed reconstruction in step 4.1 corrects this. No claim of support on the full numerical group of $X$ is needed.
