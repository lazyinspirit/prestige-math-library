---
id: thm-hh-fundamental-theorem-of-coalgebras
kind: theorem
title: "The fundamental theorem of coalgebras"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-subcoalgebras-coideals-and-quotient-coalgebras, lem-hh-finite-spanning-list-contains-a-basis, lem-hh-finite-comatrix-coalgebra-exists, thm-hh-coalgebra-quotient-and-kernel-descent, lem-hh-coefficient-extension-and-finite-tensor-separation, lem-hh-tensor-injections-quotients-and-kernels-over-a-field, def-axiom-of-choice, def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, prop-functoriality-of-module-tensor-products, def-quotient-module, thm-quotient-module-laws, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-linear-combination-and-span, def-dimension, thm-universal-property-of-free-modules]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "For an arbitrary-dimensional ambient coalgebra, AC is used only through [[lem-hh-coefficient-extension-and-finite-tensor-separation]] to separate the independent right tensor coefficients, [[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]] to identify quotient tensor kernels and inject subspace tensors, and [[thm-hh-coalgebra-quotient-and-kernel-descent]] to form the coefficient-image subcoalgebra and its finite sums. No basis of the ambient coalgebra and no extension of coordinate functionals to it is claimed. If the ambient coalgebra is finite-dimensional, taking the whole space is a choice-free case."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "UCSD Math 207A, Hopf Algebras lecture notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Chapter 1, Theorem 1.28 and complete proof, printed pp. 19–20."
    - title: "William Chin, A Brief Introduction to Coalgebra Representation Theory"
      url: "https://condor.depaul.edu/~wchin/crt.pdf"
      locator: "§2.1, Proposition 1 and coefficient-space proof, printed pp. 3–4."
---

## Statement

Let $C$ be a coalgebra over a field $k$. If $C$ is finite-dimensional, then every finite subset is contained in the finite-dimensional subcoalgebra $C$ itself, with no Choice assumption. For arbitrary $C$, assuming the Axiom of Choice, every finite subset $S\subseteq C$ is contained in a finite-dimensional subcoalgebra $D\subseteq C$.

## Facts & Assumptions

**Given:** A field $k$, a coalgebra $C$, a finite subset $S\subseteq C$, and (in the arbitrary-dimensional branch) the Axiom of Choice.

[A1] AC holds ([[def-axiom-of-choice]]).

[F1] Every tensor is a finite sum of elementary tensors, and the products are algebraic tensor products over $k$ ([[def-hh-scalar-and-tensor-conventions]]).

[F2] For a coalgebra, $\Delta$ is coassociative and $\varepsilon$ is a two-sided counit; a coalgebra map preserves both ([[def-hh-coalgebra-and-coalgebra-map]]).

[F3] A subspace spanned by a finite list has a finite basis contained in that list, and a vector space with a finite basis is finite-dimensional ([[lem-hh-finite-spanning-list-contains-a-basis]], [[def-dimension]]).

[F4] If $q:C\to C/A$ is a quotient map, then $\ker(q\otimes\mathrm{id}_C)=A\otimes C$ as a subspace of $C\otimes C$; tensoring an inclusion is injective under AC ([[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]]).

[F5] If $b_1,\ldots,b_n$ are linearly independent and $\sum_i b_i\otimes w_i=0$, then each $w_i=0$; for a finite-dimensional ambient space this coefficient-separation statement has a choice-free proof ([[lem-hh-coefficient-extension-and-finite-tensor-separation]]).

[F6] For every $m\geq1$, the vector space with basis $u_{ij}$ and formulas $\Delta(u_{ij})=\sum_\ell u_{i\ell}\otimes u_{\ell j}$, $\varepsilon(u_{ij})=\delta_{ij}$ is a coalgebra ([[lem-hh-finite-comatrix-coalgebra-exists]]).

[F7] Coideals have quotient coalgebras, kernels of coalgebra maps are coideals, and arbitrary sums of subcoalgebras are subcoalgebras ([[thm-hh-coalgebra-quotient-and-kernel-descent]]).

[F8] Every vector in a finite ordered basis has a unique coordinate list, and the coordinate maps are linear ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[F9] For any subset $X$, $\operatorname{span}(X)$ is the smallest linear subspace containing $X$ ([[def-linear-combination-and-span]]).

[F10] The quotient $C/A$ is the vector-space quotient by cosets, with its quotient map linear ([[def-quotient-module]], [[thm-quotient-module-laws]]).

[F11] Linear maps induce tensor maps functorially; the associator and symmetry are natural, and the unit isomorphisms are natural as well ([[prop-functoriality-of-module-tensor-products]], [[lem-hh-tensor-coherence-on-elementary-tensors]]).

[F12] A subcoalgebra is a subspace equipped with a coalgebra structure for which its inclusion into the ambient coalgebra is a coalgebra map ([[def-hh-subcoalgebras-coideals-and-quotient-coalgebras]]).

[F13] A map prescribed on the basis of a free vector space extends uniquely to a linear map ([[thm-universal-property-of-free-modules]]).

## Proof

1.1 If $C$ is finite-dimensional, take $D=C$. Now assume $C$ is arbitrary and use [A1]. It is enough first to put a single $c\in C$ into a finite-dimensional subcoalgebra; when $c=0$, take $D=0$ with the unique maps $\Delta_D:0\to0\otimes0$ and $\varepsilon_D:0\to k$. The coalgebra identities hold because the identity map on $0$ is zero and all maps with domain $0$ are zero, and the inclusion $D\hookrightarrow C$ preserves $\Delta$ and $\varepsilon$ because both composites from $0$ are zero. [given, A1, F1, F2, F12, construct]

2.1 Let $c\ne0$. By [F1], write $\Delta(c)=\sum_{j=1}^r x_j\otimes y_j$ and let $Y=\operatorname{span}(y_1,\ldots,y_r)$. By [F3] choose a finite ordered basis $b_1,\ldots,b_n$ of $Y$. Since $\Delta(c)\ne0$ by the counit equation in [F2], $n\geq1$. By [F8], write each $y_j=\sum_{i=1}^n\lambda_{ij}b_i$ and regroup the finite tensor sum to obtain $\Delta(c)=\sum_{i=1}^n a_i\otimes b_i$, where $a_i=\sum_{j=1}^r\lambda_{ij}x_j$; the $b_i$ are independent. [step 1.1, F1, F2, F3, F8, F9, F11, construct]

3.1 Set $A=\operatorname{span}(a_1,\ldots,a_n)$ and let $q:C\to C/A$. In the common iterated tensor product $C\otimes(C\otimes C)$, coassociativity [F2] gives $\sum_i\alpha(\Delta(a_i)\otimes b_i)=\sum_i a_i\otimes\Delta(b_i)$. Apply $q\otimes\mathrm{id}\otimes\mathrm{id}$ and naturality of $\alpha$; the right-hand side vanishes because $q(a_i)=0$, so, using the associator to regard each term in $((C/A)\otimes C)\otimes C$, $\sum_i ((q\otimes\mathrm{id})\Delta(a_i))\otimes b_i=0$. Apply the tensor symmetry that exchanges the two factors $((C/A)\otimes C)$ and $C$ to obtain $\sum_i b_i\otimes((q\otimes\mathrm{id})\Delta(a_i))=0$. Since the $b_i$ are independent, [F5] gives $(q\otimes\mathrm{id})\Delta(a_i)=0$ for every $i$. The kernel identity [F4] therefore gives $\Delta(a_i)\in A\otimes C$, and linearity gives $\Delta(A)\subseteq A\otimes C$. [step 2.1, A1, F2, F4, F5, F9, F10, F11, algebra]

4.1 Apply [F3] to the finite spanning list $a_1,\ldots,a_n$; its choice-free finite-list construction gives an ordered basis $e_1,\ldots,e_m$ of $A$. If $A=0$, the expression for $\Delta(c)$ in step 2.1 gives $\Delta(c)=0$, so the counit equation in [F2] gives $c=0$, contradicting the hypothesis of step 2.1. Hence $m\geq1$. Let $\phi_i:A\to k$ be the $i$th coordinate map in this ordered basis. If $x=\sum_i r_i e_i$ and $y=\sum_i s_i e_i$, uniqueness of coordinates gives $\phi_j(x+y)=r_j+s_j$ and $\phi_j(\lambda x)=\lambda r_j$, so each $\phi_j$ is linear by [F8]. Write $j_A:A\hookrightarrow C$ for the inclusion. By [F4], $j_A\otimes\mathrm{id}_C$ is injective; since $\Delta(e_j)$ lies in its image by step 3.1, let $\widetilde\Delta(e_j)\in A\otimes C$ be its unique preimage. Define $c_{ij}:=\lambda_C\circ(\phi_i\otimes\mathrm{id}_C)(\widetilde\Delta(e_j))$, where $\lambda_C:k\otimes C\to C$ is the tensor unit map. Writing $\widetilde\Delta(e_j)=\sum_t x_t\otimes y_t$ and expanding $x_t=\sum_i\phi_i(x_t)e_i$ gives $\Delta(e_j)=\sum_i e_i\otimes\sum_t\phi_i(x_t)y_t=\sum_i e_i\otimes c_{ij}$. [step 2.1, step 3.1, F2, F3, F4, F8, F11, algebra]

5.1 Apply coassociativity to $\Delta(e_j)=\sum_i e_i\otimes c_{ij}$. In $C\otimes(C\otimes C)$ its two sides are the images of $\sum_{i,\ell}e_\ell\otimes(c_{\ell i}\otimes c_{ij})$ and $\sum_i e_i\otimes\Delta(c_{ij})$, respectively, under $j_A\otimes\mathrm{id}_{C\otimes C}:A\otimes(C\otimes C)\to C\otimes(C\otimes C)$, using the associator to identify the first expression with the left coassociativity composite. This tensor map is injective by [F4] and the associator naturality in [F11], so the two displayed preimages are equal in $A\otimes(C\otimes C)$. Apply the well-defined linear map $\lambda_{C\otimes C}\circ(\phi_s\otimes\mathrm{id}_{C\otimes C})$ for each $s$; since $\phi_s(e_\ell)=\delta_{s\ell}$, it gives $\Delta(c_{sj})=\sum_i c_{si}\otimes c_{ij}$. [step 4.1, A1, F2, F4, F8, F11, algebra]

5.2 The right counit equation on $e_j$ gives $e_j=\sum_i e_i\varepsilon(c_{ij})$, so uniqueness of coordinates [F8] gives $\varepsilon(c_{ij})=\delta_{ij}$. The left counit equation gives $e_j=\sum_i\varepsilon(e_i)c_{ij}$, so each basis vector $e_j$ lies in $D:=\operatorname{span}\{c_{i\ell}:1\leq i,\ell\leq m\}$. Hence $A\subseteq D$. [step 4.1, F2, F3, F8, algebra]

6.1 Let $E_m$ be the finite comatrix coalgebra of [F6] and define the linear map $\Phi:E_m\to C$ by extending $u_{ij}\mapsto c_{ij}$ from its basis, which is possible by [F13]. Steps 5.1 and 5.2 show on every basis vector that $\Delta_C\Phi=(\Phi\otimes\Phi)\Delta_{E_m}$ and $\varepsilon_C\Phi=\varepsilon_{E_m}$; linearity makes $\Phi$ a coalgebra map. [step 5.1, step 5.2, F6, F11, F13, construct]

6.2 The right counit equation on $c$ gives $c=\sum_i a_i\varepsilon(b_i)$. By step 5.2 every $a_i\in A\subseteq D$, so $c\in D$. This places $c$ in the candidate coefficient subspace. [step 2.1, step 5.2, F2, algebra]

7.1 Put $K=\ker\Phi$. By [F7], $K$ is a coideal, $E_m/K$ is a coalgebra, and the induced map $\overline{\Phi}:E_m/K\to C$ is a coalgebra map. It is injective because $\Phi(x)=0$ exactly when $x\in K$, and its image is $D$. Regard it as a linear isomorphism $\psi:E_m/K\to D$, and define $\Delta_D=(\psi\otimes\psi)\Delta_{E_m/K}\psi^{-1}$ and $\varepsilon_D=\varepsilon_{E_m/K}\psi^{-1}$. For coassociativity, composing the two coalgebra composites on $D$ with the surjection $\psi$ gives respectively $(\psi\otimes(\psi\otimes\psi))\alpha(\Delta_{E_m/K}\otimes\mathrm{id})\Delta_{E_m/K}$ and $(\psi\otimes(\psi\otimes\psi))(\mathrm{id}\otimes\Delta_{E_m/K})\Delta_{E_m/K}$, which are equal by coassociativity on $E_m/K$ and naturality of the associator [F11]. Similarly, composing the left and right counit composites with $\psi$ gives $\psi\lambda_{E_m/K}(\varepsilon\otimes\mathrm{id})\Delta$ and $\psi\rho_{E_m/K}(\mathrm{id}\otimes\varepsilon)\Delta$, both equal to $\psi$; surjectivity of $\psi$ proves the two counit equations on $D$. Since $\overline{\Phi}=j_D\psi$ is a coalgebra map, $\Delta_Cj_D\psi=(j_D\otimes j_D)(\psi\otimes\psi)\Delta_{E_m/K}=(j_D\otimes j_D)\Delta_D\psi$ and $\varepsilon_Cj_D\psi=\varepsilon_D\psi$; surjectivity of $\psi$ proves that the inclusion $j_D:D\hookrightarrow C$ is a coalgebra map. Thus $D$ is a subcoalgebra by [F12]. Its finite spanning list of $m^2$ coefficients makes it finite-dimensional by [F3], and together with step 6.2 it contains $c$. [step 6.1, step 6.2, A1, F3, F7, F10, F11, F12, construct]

7.2 For a finite set $S$, apply the one-element assertion to each $c\in S$ and take the sum of the resulting subcoalgebras. By [F7] the sum is a subcoalgebra; it contains $S$ and is spanned by the finite union of their finite coefficient lists, so [F3] makes it finite-dimensional. If $S=\varnothing$, take the zero subcoalgebra. [step 6.2, A1, F3, F7, F9, given, construct]

8.1 The finite-dimensional case is choice-free by step 1.1. In the arbitrary-dimensional case, [A1] is used through the coefficient-separation and tensor-kernel suppliers in step 3.1 and through the quotient and sum results in steps 7.1 and 7.2; steps 2.1 and 4.1 use only finite tensor expressions and the choice-free finite-list basis lemma. Step 7.1 proves the one-element case, and step 7.2 handles the finite subset, including the empty set. [step 1.1, step 2.1, step 3.1, step 4.1, step 7.1, step 7.2, A1, F3, F4, F5, F7] ∎

## Remarks

The coefficient-separation route uses the actual statement of [[lem-hh-coefficient-extension-and-finite-tensor-separation]]: independent tensor coefficients vanish. It does not assert that coordinate functionals on a finite subspace extend to the whole infinite-dimensional coalgebra.
