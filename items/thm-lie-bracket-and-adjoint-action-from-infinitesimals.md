---
id: thm-lie-bracket-and-adjoint-action-from-infinitesimals
kind: theorem
title: "The Lie bracket from infinitesimals and the adjoint action"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: ["def-coordinate-hopf-algebra-of-affine-group-scheme", "def-lie-algebra-over-a-field", "def-lie-algebra-of-a-group-scheme", "lem-lie-algebra-tangent-space-and-functoriality", "lem-adjoint-representation-of-an-affine-group-scheme", "lem-lie-algebra-of-the-general-linear-group", "thm-affine-group-scheme-faithful-finite-dimensional-representation", "def-derivation-of-a-lie-algebra", "def-axiom-of-choice", "def-linear-map", "thm-ring-matrix-arithmetic-laws", "def-closed-immersion-schemes", "def-linear-basis"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "10.20-10.23, printed pp. 192-194 (PDF 203-205): the bracket [x,y] = ad(x)y, its functoriality, uniqueness through faithful representations, and the GLn commutator."
    - title: "SGA 3, Expose II (M. Demazure), Fibres tangents - Algebres de Lie, corrected 14 October 2024 edition"
      url: "https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp2-14oct24.pdf"
      locator: "Definition 4.7.2, 4.7.3 with note (79), Corollaire 4.8.1 and Scholie 4.9, printed pp. 85-88: the bracket via the commutator of lifts, functoriality, skew-symmetry and Jacobi."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $G$ be an affine group scheme of finite type over $k$ with Lie algebra $\mathfrak g=\operatorname{Lie}(G)$ and adjoint representation $\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$ ([[lem-adjoint-representation-of-an-affine-group-scheme]]). (a) The differential $\operatorname{ad}:=\operatorname{Lie}(\operatorname{Ad}):\mathfrak g\to\operatorname{End}(\mathfrak g)$ is $k$-linear and $[X,Y]:=\operatorname{ad}(X)(Y)$ makes $\mathfrak g$ a Lie algebra over $k$ ([[def-lie-algebra-over-a-field]]), with $\operatorname{ad}(X)$ a derivation of $\mathfrak g$ for every $X$ ([[def-derivation-of-a-lie-algebra]]). (b) The bracket is functorial: for a morphism $f:G\to H$ of affine group schemes of finite type over $k$, the map $\operatorname{Lie}(f):\mathfrak g\to\mathfrak h$ is a homomorphism of Lie algebras. (c) For $X,Y\in\mathfrak g$, in $G\bigl(k[t,t']/(t^2,t'^2)\bigr)$ one has $e^{tX}e^{t'Y}e^{-tX}e^{-t'Y}=e^{tt'[X,Y]}$, where $X,Y$ are regarded in $\mathfrak g\otimes_kk[t,t']/(t^2,t'^2)$ through the two factors; equivalently, $[X,Y]$ is the unique element of $\mathfrak g$ whose image under the ring map $k[\varepsilon]\to k[t,t']/(t^2,t'^2)$, $\varepsilon\mapsto tt'$, is the commutator of the two dual-number lifts. (d) If $G=\operatorname{GL}_n$ then $[X,Y]=XY-YX$ under the identification $\mathfrak g=\mathfrak{gl}_n$ of [[lem-lie-algebra-of-the-general-linear-group]]. (e) A closed immersion of affine group schemes of finite type over $k$ induces an injective homomorphism of Lie algebras; consequently two bracket assignments on the Lie algebras of affine group schemes of finite type over $k$ which are functorial in $G$ and give the matrix commutator on $\operatorname{GL}_n$ agree. Choice is inherited for the finite-type matrix groups in the adjoint-representation supplier; clause (e) also uses it through [[thm-affine-group-scheme-faithful-finite-dimensional-representation]]. The coefficient calculations themselves are choice-free.

## Facts & Assumptions

**Given:** A field $k$, an affine group scheme $G$ of finite type over $k$ with Lie algebra $\mathfrak g$, the adjoint representation $\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$, and elements $X,Y,Z\in\mathfrak g$.

[F1] [[lem-adjoint-representation-of-an-affine-group-scheme]]: $\operatorname{Ad}$ is a morphism of $k$-group schemes with $x\,e^{\varepsilon X}\,x^{-1}=e^{\varepsilon\operatorname{Ad}(x)X}$ for all commutative $k$-algebras $R$, $x\in G(R)$ and $X\in\mathfrak g\otimes_kR$, and $\operatorname{Ad}$ is natural in $G$.

[F2] [[lem-lie-algebra-tangent-space-and-functoriality]]: for a morphism $f:G\to H$ the map $\operatorname{Lie}(f)$ is $k$-linear with $f_R(e^{\varepsilon X})=e^{\varepsilon\operatorname{Lie}(f)_R(X)}$; the group law on $\operatorname{Lie}(G)(R)=\mathfrak g\otimes_kR$ is addition, the elements are $e^{\varepsilon X}$, and a closed immersion induces an injective $\operatorname{Lie}(f)$.

[F3] [[lem-lie-algebra-of-the-general-linear-group]]: $\operatorname{Lie}(\operatorname{GL}_V)\cong\operatorname{End}(V)$ via $A\mapsto\operatorname{id}+\varepsilon A$, and the adjoint representation of $\operatorname{GL}_V$ is conjugation, $\operatorname{Ad}(g)A=gAg^{-1}$.

[F4] [[def-lie-algebra-over-a-field]] and [[def-derivation-of-a-lie-algebra]]: a Lie algebra is a $k$-vector space with a bilinear bracket satisfying $[x,x]=0$ and the Jacobi identity; a derivation is a linear map $D$ with $D[x,y]=[Dx,y]+[x,Dy]$. [[def-linear-map]] supplies the meaning of $k$-linearity.

[F5] [[thm-ring-matrix-arithmetic-laws]]: endomorphisms of a vector space compose associatively and distribute over addition, and for $\varepsilon^2=0$ one has $(\operatorname{id}+\varepsilon A)^{-1}=\operatorname{id}-\varepsilon A$ and $(\operatorname{id}+tA)(\operatorname{id}+t'B)(\operatorname{id}-tA)(\operatorname{id}-t'B)=\operatorname{id}+tt'(AB-BA)$ when $t^2=t'^2=0$. [[def-linear-basis]] lets endomorphisms be written as matrices after a finite basis choice.

[F6] [[def-axiom-of-choice]] and [[def-closed-immersion-schemes]]: the Axiom of Choice is the choice principle assumed in (e); closed immersions are the monomorphisms used there.

[F7] For an affine group scheme $G=\operatorname{Spec}A$, the coordinate comorphisms are $\Delta=\mathcal O(m)$ and $\epsilon=\mathcal O(e)$; in particular evaluating $\Delta a$ on a pair of algebra-valued points evaluates $a$ on their product, and evaluating $\epsilon a$ gives the value at the identity ([[def-coordinate-hopf-algebra-of-affine-group-scheme]]).

## Proof

1.1 The endomorphism-valued differential. If $\mathfrak g=0$, its automorphism group is the trivial group, its endomorphism space is zero, and all bracket and commutator assertions are immediate; hence suppose $\mathfrak g\ne0$. The adjoint representation is a morphism $\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$, so it has a $k$-linear differential $\operatorname{ad}=\operatorname{Lie}(\operatorname{Ad}):\mathfrak g\to\operatorname{Lie}(\operatorname{GL}_{\mathfrak g})$ by [F2], and $\operatorname{Lie}(\operatorname{GL}_{\mathfrak g})\cong\operatorname{End}(\mathfrak g)$ via $A\mapsto\operatorname{id}+\varepsilon A$ by [F3]. In particular, for $X\in\mathfrak g$ and $\varepsilon^2=0$, the identity of [F1] and the exponential identity of [F2] give $\operatorname{Ad}(e^{\varepsilon X})=e^{\varepsilon\operatorname{ad}(X)}=\operatorname{id}+\varepsilon\operatorname{ad}(X)$ inside $\operatorname{GL}_{\mathfrak g}(k[\varepsilon])$. [F1, F2, F3, given]

2.1 The commutator formula (c). Let $R=k[t]/(t^2)$ and regard the dual-number point $e^{tX}\in G(R)$ reducing to the identity in $G(k)$; applying [F1] with this $x$ and with $Y$, in the ring $R[\varepsilon]=k[t,\varepsilon]/(t^2,\varepsilon^2)$ one has $e^{tX}e^{\varepsilon Y}e^{-tX}=e^{\varepsilon\operatorname{Ad}(e^{tX})Y}$. By step 1.1 applied after the base change $\varepsilon\mapsto t$, $\operatorname{Ad}(e^{tX})=\operatorname{id}+t\operatorname{ad}(X)$ in $\operatorname{GL}_{\mathfrak g}(R)$, so $\operatorname{Ad}(e^{tX})Y=Y+t[X,Y]$; since the exponential correspondence is additive by [F2], $e^{\varepsilon(Y+t[X,Y])}=e^{\varepsilon Y}e^{\varepsilon t[X,Y]}$. Multiplying by $e^{-\varepsilon Y}$ and renaming $\varepsilon$ as $t'$ gives $e^{tX}e^{t'Y}e^{-tX}e^{-t'Y}=e^{tt'[X,Y]}$ in $G(k[t,t']/(t^2,t'^2))$, the unique such element because its coefficient on every local function is $tt'D_Z(a)$, and $tt'$ is a nonzero $k$-basis monomial, so $e^{tt'Z}=e$ forces $D_Z=0$ by [F2]; the "equivalently" statement is exactly this identity read as the image under $\varepsilon\mapsto tt'$. [F1, F2, step 1.1, algebra]

2.2 The case $G=\operatorname{GL}_n$ (d). Under the identification $\operatorname{Lie}(\operatorname{GL}_n)=\mathfrak{gl}_n$ of [F3], the element $X$ corresponds to the point $\operatorname{id}+\varepsilon X$, and by [F3] its adjoint action is conjugation: $\operatorname{Ad}(\operatorname{id}+\varepsilon X)Y=(\operatorname{id}+\varepsilon X)Y(\operatorname{id}-\varepsilon X)=Y+\varepsilon(XY-YX)$, using $(\operatorname{id}+\varepsilon X)^{-1}=\operatorname{id}-\varepsilon X$ from [F5]. Comparing with step 1.1, which writes the same operator as $Y+\varepsilon\operatorname{ad}(X)Y$, gives $[X,Y]=\operatorname{ad}(X)Y=XY-YX$. [F3, F5, step 1.1, algebra]

3.1 Alternation, skew-symmetry and Jacobi. Put $A=\mathcal O(G)$ with augmentation $\epsilon$ and comultiplication $\Delta$ from [[def-coordinate-hopf-algebra-of-affine-group-scheme]]. The point $e^{tX}$ is the algebra map $a\mapsto\epsilon(a)+tD_X(a)$, where $D_X:A\to k$ is the tangent coefficient. The product of the two same-vector lifts $e^{tX},e^{t'X}$ evaluates $a$ as $\epsilon(a)+(t+t')D_X(a)+tt'(D_X\otimes D_X)\Delta(a)$, by the counit identities. Reversing the two lifts gives the identical formula, so they commute. Step 2.1 with $Y=X$ now gives $e^{tt'[X,X]}=e$, hence $[X,X]=0$: the map $Z\mapsto e^{tt'Z}$ is injective because its coefficient is $tt'D_Z(a)$ and $1,t,t',tt'$ are linearly independent over $k$. This proves alternation also in characteristic two. The bracket is bilinear since $\operatorname{ad}$ and its values are linear; expanding $[X+Y,X+Y]=0$ gives $[X,Y]+[Y,X]=0$. Applying the group homomorphism $\operatorname{Ad}$ to step 2.1 and using [F5] gives $\operatorname{ad}([X,Y])=\operatorname{ad}X\circ\operatorname{ad}Y-\operatorname{ad}Y\circ\operatorname{ad}X$, by comparison of $tt'$-coefficients. Evaluating this identity at $Z$ and using skew-symmetry gives the Jacobi identity. It also gives $\operatorname{ad}_X([Y,Z])= [ [X,Y],Z]+[Y,[X,Z]]$, so every $\operatorname{ad}_X$ is a derivation. This proves (a) without a faithful embedding; the coefficient calculation adds no choice use beyond the finite-type suppliers. [F1, F2, F3, F4, F5, F7, step 1.1, step 2.1, algebra]

3.2 Functoriality (b). Let $f:G\to H$ be a morphism of affine group schemes of finite type over $k$ and let $X,Y\in\mathfrak g$. Applying the homomorphism $f$ on points to the identity of step 2.1 and using $f_R(e^{\varepsilon Z})=e^{\varepsilon\operatorname{Lie}(f)_R(Z)}$ from [F2] gives $e^{t\operatorname{Lie}(f)X}e^{t'\operatorname{Lie}(f)Y}e^{-t\operatorname{Lie}(f)X}e^{-t'\operatorname{Lie}(f)Y}=e^{tt'\operatorname{Lie}(f)[X,Y]}$. The same commutator formula applied in $H$ identifies the left-hand side with $e^{tt'[\operatorname{Lie}(f)X,\operatorname{Lie}(f)Y]}$, so injectivity of the exponential correspondence [F2] gives $\operatorname{Lie}(f)[X,Y]=[\operatorname{Lie}(f)X,\operatorname{Lie}(f)Y]$. [F1, F2, step 2.1, algebra]

4.1 Conclusion and uniqueness (e). By step 3.1 the bracket is a Lie bracket with every $\operatorname{ad}(X)$ a derivation; step 3.2 says $\operatorname{Lie}(f)$ is a homomorphism for every morphism; step 2.2 identifies the bracket on $\operatorname{GL}_n$; and step 2.1 is (c). For (e), let $i:G\hookrightarrow\operatorname{GL}_V$ be a closed immersion; by [F2], $\operatorname{Lie}(i)$ is injective, and by step 3.2 it is a homomorphism of Lie algebras for the present bracket. If $[-,-]'$ is another functorial bracket assignment agreeing with the matrix commutator on $\operatorname{GL}_n$, then for $X,Y\in\mathfrak g$ both $\operatorname{Lie}(i)([X,Y])$ and $\operatorname{Lie}(i)([X,Y]')$ equal $[\operatorname{Lie}(i)X,\operatorname{Lie}(i)Y]_{\operatorname{GL}_V}$, and injectivity gives $[X,Y]=[X,Y]'$; the closed immersion $i$ exists for every affine $G$ of finite type over $k$ by [[thm-affine-group-scheme-faithful-finite-dimensional-representation]], which is the additional use of Choice in (e). [F2, F6, step 2.2, step 3.1, step 3.2] ∎

## Remarks

The local supplier [[thm-affine-group-scheme-faithful-finite-dimensional-representation]] used in step 4.1(e) is now authored in batch 13 (accepted, confidence 1); its statement gives a closed immersion $G\hookrightarrow\operatorname{GL}_V$ for every affine group scheme of finite type over $k$, which is exactly the input of clause (e), so that use is reconciled, and Choice in (e) is inherited through this supplier, while the finite-type matrix groups also inherit Choice through the adjoint-representation supplier. The independent SGA 3 route (Definition 4.7.2, 4.7.3, Corollaire 4.8.1) proves skew-symmetry and Jacobi by the same commutator-of-lifts mechanism.
