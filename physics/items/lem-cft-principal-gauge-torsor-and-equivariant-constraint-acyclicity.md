---
id: lem-cft-principal-gauge-torsor-and-equivariant-constraint-acyclicity
kind: lemma
title: Principal gauge torsor and equivariant quotient constraint acyclicity
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
axiom_use: ZF + AC
deps:
  - def-axiom-of-choice
  - def-cft-slodowy-slice
  - lem-finite-lie-triangularization-and-rank-one-complete-reducibility
  - thm-flatness-of-noetherian-completion
  - cor-finite-variable-polynomial-ring-noetherian
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - thm-nakayama-lemma
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cft-slodowy-slice: mathematical-premise
  lem-finite-lie-triangularization-and-rank-one-complete-reducibility: mathematical-premise
  thm-flatness-of-noetherian-completion: mathematical-premise
  cor-finite-variable-polynomial-ring-noetherian: mathematical-premise
  cor-weak-nullstellensatz-algebraically-closed-coordinate-form: mathematical-premise
  thm-nakayama-lemma: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa, Associated varieties of modules over Kac–Moody algebras and C2-cofiniteness of W-algebras
      url: https://arxiv.org/pdf/1004.1554
      locator: Retrieved banner v5, sections 3.4–3.8; principal integral-grading algebraic construction below, with an explicit formal-transverse proof replacing the cited flatness input.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 4
---

## Statement

Assume AC. Let a finite-dimensional complex Lie algebra g, equipped with a nondegenerate invariant bilinear form B pairing only opposite grades, have an sl2 triple (e,h,f), an integral grading $g=\sum$ $g_j$ with [h,x]=2jx, and $g_0$ a Cartan subalgebra. Suppose its adjoint sl2 representation has no trivial summand and every summand has even highest weight. Set $n=\sum_{j>0}g_j$, $b=\sum_{j\ge 0}g_j$, and $S=f+g^e$. These are the principal Dynkin-grading hypotheses; the statement also applies whenever these explicit hypotheses are supplied directly. Let N be the affine nilpotent group on n with the finite Baker–Campbell–Hausdorff product. For every $m\ge 0$, write $g_m=g$ tensor $C[t]/(t^{m+1})$, and similarly $n_m,b_m,N_m,S_m$. Let $X_m$ be any closed subscheme of $g_m$ whose ideal is stable under every adjoint $g_m$ derivation. No reducedness, smoothness, complete-intersection or freeness hypothesis on $X_m$ is imposed.

Then the action map $N_m$ times $S_m$ to $f+b_m$ is a polynomial isomorphism. Its restriction identifies $Y_m=X_m$ intersect $(f+b_m)$ scheme-theoretically with $N_m$ times $Z_m$, where $Z_m=X_m$ intersect $S_m$. The linear constraint functions cutting out $f+b_m$ have Koszul cohomology on $O(X_m)$ only in degree zero, equal to $O(Y_m)$. The total classical constraint/Chevalley complex has cohomology only in degree zero, equal to $O(Z_m)$.

The same concentration conclusion holds, with degree-zero result the filtered colimit of $O(Z_m)$, for a union $A=\sum$ $A_m$ of compatible finite-jet coordinate algebras $A_m=O(g_m)/J_m$, with injective transition maps and adjoint-stable $J_m$, when complexes and cochains mean the direct union of these finite-jet complexes. This is a restricted polynomial statement. It asserts neither a completion nor the convergence or strictness of a quantum BRST filtration.

## Statement references

[[def-cft-slodowy-slice]]

[[lem-finite-lie-triangularization-and-rank-one-complete-reducibility]]

[[thm-flatness-of-noetherian-completion]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Precisely the grading, sl2 hypotheses, stable ideals, finite jets and restricted direct-union convention in the Statement.

[F1] [[lem-finite-lie-triangularization-and-rank-one-complete-reducibility]] supplies the finite sl2 strings and their nonzero raising/lowering coefficients. All linear decompositions below follow from those strings.

[F2] [[def-cft-slodowy-slice]] defines S as the affine translate of the e-centralizer; no transversality theorem is inferred from the definition.

[F3] [[thm-flatness-of-noetherian-completion]] permits detecting the finite Koszul homology at completed Noetherian local rings. Faithfulness at a local ring follows from finite-module Nakayama: a nonzero finite module has nonzero quotient by the maximal ideal, unchanged by completion.

[F4] [[cor-finite-variable-polynomial-ring-noetherian]] makes the finite coordinate algebras Noetherian; [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]] identifies their maximal ideals with complex points; [[thm-nakayama-lemma]] detects nonzero finite modules after local residue reduction. These are the finite-ring interfaces used in the local-to-global Koszul argument.

[A1] [[def-axiom-of-choice]] is retained from F3's actual completion interface. The proof makes no assertion that its finite-dimensional linear choices require full AC.

## Proof

**Given:** F1–F4, A1 and the Statement. All intersections are scheme-theoretic.

1.1 On an sl2 string of highest h-weight 2d, the grading runs from -d to d. For $r\ge 0$, the lowering map ad f is injective on degree r+1, and its image in degree r complements the highest line when $r=d$. Thus $g_r=[f,g_{r+1}]$ direct-sum $(g^e \cap g_r)$. Also ad $f:g_r$ to $g_{r-1}$ is surjective for $r\le 0$. Choose a finite-dimensional complement $q_r$ to its kernel there; then ad $f:q_r$ to $g_{r-1}$ is an isomorphism. Put $q=\sum_{r\le 0}q_r$. Consequently ad f:q to g/b is an isomorphism. These conclusions hold coefficientwise after tensoring with $C[t]/(t^{m+1})$. No nonzero sl2 string here has $d=0$ by hypothesis, so $g^e$ is entirely in positive degree. [given, F1, F2, algebra]

2.1 Write $y=f+\sum_{r\ge 0}y_r$. Suppose its components below degree r have already been put in the chosen $g^e$ summands. Choose the unique $x_{r+1}$ in $g_{r+1}$ for which $y_r+[x_{r+1},f]$ is in $g^e$. Acting by exp(ad $x_{r+1}$) changes degree r by exactly this bracket. Its other brackets with f have degree at least $2(r+1)-1>r$, and brackets with b have degree at least r+1. It therefore leaves every lower degree unchanged. Continue through the finitely many nonzero degrees. Each choice solves a fixed invertible linear system, and all exponentials are finite because positive grading raises degree. This constructs polynomial functions n(y) and s(y) with $y=Ad(n(y))s(y)$. Conversely any nonidentity n has a lowest nonzero positive-height logarithmic term; its bracket with f has a nonzero lowest component in the image summand, so it cannot take one slice point to another. This proves uniqueness, including the stabilizer. The construction and its inverse are polynomial over every complex algebra of test coefficients, hence prove a scheme isomorphism N times S to f+b. Tensoring all steps with the truncated polynomial ring proves the claimed finite-jet isomorphisms, without a reduced-point argument. [F1, F2, step 1.1, construct, algebra]

2.2 We next prove constraint regularity independently of smoothness of $X_m$. Fix a closed point $y=f+v$ in $Y_m$ and choose the graded vector space $q_m$ of step 1.1. On formal parameters u in $q_m$ define the formal map Psi(u,z)=exp(ad u)(f+z), with z in $b_m$ near v. The exponential is now a formal power series; no algebraic exponential of Cartan elements is assumed. Its derivative normal to $b_m$ is u maps to [u,f+v] modulo $b_m$. Ordered by the grading of $q_m$, its leading term is [u,f], an isomorphism by step 1.1, and [u,v] raises that leading degree by at least one. This is an invertible finite triangular matrix. Thus the formal map from $q_m$ times $(f+b_m)$ to $g_m$ has invertible linear part at (0,y). It has an actual formal inverse: recursively at each total degree solve the next homogeneous coefficient with that fixed invertible linear part. Uniqueness at every degree verifies both inverse identities. [given, F1, step 1.1, construct, algebra]

3.1 Stability of the ideal $J_m$ under the adjoint derivations integrates to $N_m$-invariance: every positive-height derivation is locally nilpotent on the coordinate ring, so its exponential is finite on each polynomial and preserves $J_m$. Apply the scheme automorphism (n,y) to (n,Ad(n)y) of $N_m$ times $g_m$. Its inverse uses n inverse, so the pullback of $J_m$ is exactly the extended ideal from the second factor. Restricting the second factor to $S_m$ proves that the preimage of $X_m$ under the torsor is $N_m$ times $Z_m$ with its actual ideal. This proves the asserted product scheme $Y_m$, including nilpotents and embedded components. In particular $O(Y_m)=O(N_m)$ tensor $O(Z_m)$ and the $n_m$ action is the translation action on its first factor. [given, step 2.1, construct, algebra]

3.2 The formal action of exp(ad u) preserves the extended ideal of $X_m$, because each coefficient in its expansion is an iterated adjoint derivation applied to that ideal; the inverse exponential proves equality of ideals. Therefore Psi identifies the completed local scheme $X_m$ at y with the product of its completed intersection $Y_m$ at y and the formal parameters u. Moreover the moment-constraint coordinates themselves can replace u: the derivative in u of the negative-grade coordinates of Psi is precisely the same triangular isomorphism from step 2.2. Apply its homogeneous inverse construction while fixing z. In the completed ring this gives $\widehat{O}(X_m,y)=\widehat{O}(Y_m,y)[\![a_1,...,a_s]\!]$, where $a_i$ are the original independent linear moment constraints and $s=\operatorname{dim}$ $n_m$. Multiplication by each successive $a_i$ is injective even when the coefficient ring has nilpotents: compare formal-power-series coefficients. This proves regularity in the completed local ring. [given, step 2.2, construct, algebra]

4.1 A regular sequence has acyclic positive Koszul homology here directly: the one-variable complex is injective multiplication, and tensoring one further two-term complex gives the mapping cone of multiplication on the previous Koszul complex; induction identifies its only homology with the successive quotient. These are finite complexes of finite modules over the Noetherian coordinate ring of $X_m$. At points on $Y_m$ their completed positive homology is zero by step 3.2; F3 and local Nakayama detect zero homology before completion. Off $Y_m$ some constraint is a unit, and wedging with its Koszul generator divided by that unit is a contracting homotopy. Vanishing can be checked at closed points for a finite module over a finitely generated complex algebra: a nonzero finite module has a maximal ideal in its support. Thus the global constraint Koszul complex has only degree-zero cohomology $O(Y_m)$. This argument does not assert that a sequence ending in the zero ring is a regular sequence. [F3, F4, A1, step 3.2, construct, algebra]

5.1 Define the total classical complex explicitly. Use the action on functions given by pullback under exp(-s ad x), so its infinitesimal operators form a Lie representation. Start with the Koszul complex $K=O(X_m) \otimes \operatorname{exterior}(n_m)$, with antighost degree -1 and $d_K(b_x)=a_x$, the constraint paired with x. The character $\chi(x)=B_m(f,x)$ vanishes on $[n_m,n_m]$, since f has height -1 and that bracket has height at least 2; $B_m$ is the invariant form given by the coefficient of $t^m$ in B(x(t),y(t)). The adjoint action of $n_m$ on the coordinates, together with its induced action on antighosts, consequently commutes with $d_K$. Apply the Chevalley cochain differential to K: on a degree-p alternating cochain phi it is the sum over i of $(-1)^i$ $x_i$ acting on phi with $x_i$ omitted, plus the sum over $i<j$ of $(-1)^{i+j}$ $\phi([x_i,x_j], \text{with }x_i,x_j\text{ omitted})$, with indices starting at zero and the bracket placed first. The total differential is $d_{\mathrm{CE}}+(-1)^p$ $d_K$. The representation and Jacobi identities give its square zero by canceling the action-commutator and triple-bracket terms. Filtering this finite bicomplex by cochain degree and using step 4.1 identifies its cohomology with $H_{\mathrm{CE}}(n_m,O(Y_m))$. No convergence issue is present: both exterior degrees have finite range. [given, step 3.1, step 4.1, construct, algebra]

6.1 Under step 3.1 the latter complex is $O(Z_m)$ tensor the Chevalley complex of $n_m$ with coefficients $O(N_m)$ in the regular translation action. Identify its invariant coframe with the algebraic cotangent coframe of the nilpotent group. The formula for the exterior derivative on invariant vector fields is exactly the two-term action/bracket formula in step 5.1, so this is the ordinary algebraic de Rham complex of $N_m$. BCH/exponential coordinates identify its underlying variety with affine space. Its polynomial de Rham complex contracts to constants: on a monomial form of polynomial degree a and exterior degree b with $a+b>0$, contraction with the Euler vector field divided by a+b satisfies dH+Hd=1; on constants use evaluation at the origin. This identity follows from the product rule and the identities for each coordinate and its differential, and extends by linearity to every polynomial form. Tensoring that explicit homotopy with $O(Z_m)$ is valid over C. It proves vanishing in every positive cochain degree and degree-zero cohomology exactly $O(Z_m)$. [step 2.1, step 3.1, step 5.1, construct, algebra]

7.1 Finally use precisely the restricted direct-union convention in the Statement. Each polynomial coefficient, ghost monomial and antighost monomial is present at a finite jet level. To specify the transition, label a constraint and its antighost by its Taylor-coefficient index j: the infinitesimal mode x $t^k$ sends either coefficient to the bracket coefficient at index j-k, which is zero for $k>j$. Ghost cochains inflate along $n_{m+1}$ to $n_m$; a ghost of index j has bracket differential involving only $k+l=j$. Antighost index j corresponds under the Frobenius pairing $B_m$ to x $t^{m-j}$, so its inclusion at the next stage corresponds to multiplying that representative by t, rather than incorrectly using the identical t-power. These rules prove that the coordinate/ghost/antighost inclusions commute with both differentials. A cycle in the union is already a cycle at some finite stage. If its degree is nonzero, step 6.1 supplies a primitive at that same stage, hence in the union. In degree zero two representatives become equal exactly when their difference is a boundary at a sufficiently large finite stage. This proves cohomology of the union is the filtered colimit of the $O(Z_m)$; their transition maps need not be injective even though the cochain transition maps are. Equivalently this is the elementary exactness of filtered unions of vector spaces, proved here on representatives. Arbitrary products, unrestricted Lie cochains and completed ghost spaces are not introduced. Every conclusion in the Statement follows. [step 4.1, step 5.1, step 6.1, construct, algebra] ∎

## Limits for the quantum application

For a simple affine quotient the classical coefficient algebra must be the
actual gr-Li quotient of the universal arc algebra, rather than an assumed arc
algebra of its C2 quotient. Its finite-jet intersections are adjoint-stable
ideals, so the present statement is designed to cover that distinction. The
actual Li-symbol differential must still be identified with the restricted
classical differential, including polarizations and signs. The present lemma
does not prove that the quantum BRST filtration is regular in each improved
conformal weight, that an edge map is surjective, or that its induced
filtration equals the intrinsic Li filtration. Those are separate quantum
obligations; associated-graded vanishing alone is not substituted for them.
