---
id: thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis
kind: theorem
title: "The Burau determinant formula for a closed braid and its axis"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps: [def-axiom-of-choice, def-coloured-reduced-burau-matrix, def-reduced-burau-representation,
       lem-the-deficiency-one-fox-calculus-determinant-rule,
       def-one-variable-alexander-module-of-an-oriented-link,
       def-alexander-polynomial-from-the-first-elementary-ideal,
       def-closure-of-a-geometric-braid,
       def-artin-automorphisms-of-the-free-group, thm-seifert-van-kampen,
       def-standard-meridians-of-a-punctured-disk]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. R. Morton, The multivariable Alexander polynomial for a closed braid, arXiv:math/9803138, section 2.1 and Theorem 1 with its complete proof (printed pp. 2-6)"
      url: "https://arxiv.org/pdf/math/9803138"
    - title: "Anthony Conway, Burau maps and twisted Alexander polynomials, arXiv:1510.06678, Theorem 3.15 with its proof (printed pp. 16-17)"
      url: "https://arxiv.org/pdf/1510.06678"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.2 equation (15) (printed p. 47)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the Alexander-module convention. Let $n\ge2$, let $\beta\in B_n$ with closure $\widehat\beta\subset S^3$ and
braid axis $A\subset S^3$, so that $\widehat\beta\cup A$ is an oriented link
([[def-closure-of-a-geometric-braid]]); let
$\overline B_\beta(t_1,\dots,t_n)$ be the coloured reduced Burau matrix of
[[def-coloured-reduced-burau-matrix]] and put
$B_\beta(t):=\overline B_\beta(t,\dots,t)$ for its equal-label
specialisation. Then:

(1) [Morton] the multivariable Alexander invariant of
$\widehat\beta\cup A$ satisfies
$$\Delta_{\widehat\beta\cup A}(t_1,\dots,t_n,x)\doteq \det\bigl(I-x\,\overline B_\beta(t_1,\dots,t_n)\bigr)$$
with the identifications $t_{\pi(j)}=t_j$ forced by the permutation $\pi$ of
$\beta$, where $x$ is the axis variable and $\doteq$ means equality up to
multiplication by a unit of the Laurent ring $\mathbb Z[t_1^{\pm1},\dots,
t_n^{\pm1},x^{\pm1}]$;

(2) [deletion of the axis] with the same identifications $t_{\pi(j)}=t_j$, the
Torres--Fox deletion of the axis gives the multivariable invariant of the
closed braid,
$$D^{\mathrm{mv}}_{\widehat\beta}(t_1,\dots,t_n)\doteq \frac{\det\bigl(I-\overline B_\beta(t_1,\dots,t_n)\bigr)}{1-t_1t_2\cdots t_n},$$
and in the one-variable specialisation $t_1=\cdots=t_n=t$ the one-variable
Alexander polynomial of
[[def-alexander-polynomial-from-the-first-elementary-ideal]] satisfies
$$\Delta_{\widehat\beta}(t)\doteq \frac{(1-t)\det\bigl(I-B_\beta(t)\bigr)}{1-t^{n}} ;$$
Here $D^{\mathrm{mv}}$ is Morton's multivariable invariant, a fraction for a knot. Its equal-label specialization satisfies $D^{\mathrm{mv}}_{\widehat\beta}(t,\ldots,t)\doteq\Delta_{\widehat\beta}(t)/(1-t)$ for any number of components; when there is more than one component it differs from the library's $D_{\widehat\beta}=\Delta_{\widehat\beta}$ by the factor $1-t$. For a knot ($\pi$ an $n$-cycle) the polynomial equals
$\det(I-B_\beta(t))/(1+t+\cdots+t^{n-1})$ up to units, and for a link with $k$
components the identifications leave one variable per cycle and the same
formulas hold, with the library's Alexander invariant
$D_{\widehat\beta}=\Delta_{\widehat\beta}/(1-t)$ for a knot and
$D_{\widehat\beta}=\Delta_{\widehat\beta}$ for $k>1$. All formulas are stated
up to multiplication by a unit $\pm t^m$ (and $\pm t_i^m$ in the multivariable
case) of the corresponding Laurent ring.

## Facts & Assumptions

**Given:** AC and an integer $n\ge2$, a braid $\beta\in B_n$ with closure $\widehat\beta$ and braid axis $A$, the coloured reduced Burau matrix $\overline B_\beta(t_1,\dots,t_n)$, and the equal-label specialisation $B_\beta(t)$. AC is inherited from the Alexander module; the finite Fox-determinant manipulations use no further choice.

[F1] **Literature input: diagram presentation.** Use the bottom meridians $u_1,\ldots,u_n$ of Morton's Figure 2 and their reverse partial products $g_0=1$, $g_i=u_i\cdots u_1$. For a crossing, let $\Gamma_i$ send $u_i$ to $u_{i+1}$ and $u_{i+1}$ to $u_{i+1}u_i u_{i+1}^{-1}$, fixing the other meridians. For the word $\beta=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_l}^{\varepsilon_l}$ read from the top, successive substitutions express the top meridians in the bottom generators by $T_\beta=\Gamma_{i_l}^{\varepsilon_l}\circ\cdots\circ\Gamma_{i_1}^{\varepsilon_1}$. Gluing the two disk slices gives the complement presentation with generators $g_1,\ldots,g_n,c$ and relations $T_\beta(g_i)=c^{-1}g_ic$, where $c$ is the axis meridian; $\varphi(u_j)=t_j$ and $\varphi(c)=x$. This diagram presentation is the quoted topological input of Morton's proof of Theorem 1, printed pp. 4–6 (van Kampen, [[thm-seifert-van-kampen]]). The substitutions here use moving disk slices; they are not the ordinary-composition automorphism of [[def-artin-automorphisms-of-the-free-group]]. No equality between those two word actions is assumed.

[F2] **Fox calculus.** For a free basis $g_1,\ldots,g_n$, $\partial g_k/\partial g_j=\delta_{kj}$, $\partial(vw)/\partial g_j=\partial v/\partial g_j+v\,\partial w/\partial g_j$, and $\partial(v^{-1})/\partial g_j=-v^{-1}\partial v/\partial g_j$. Writing $J(U)_{ij}=\partial U(g_i)/\partial g_j$, ordinary function composition satisfies $J(U\circ V)=U(J(V))J(U)$, with $U$ applied entrywise to group-ring coefficients. These are the free-derivative rules used in Morton's proof, printed pp. 5–6. They give a product in word order for the successive-substitution action of [F1], not for the library's ordinary Artin word action.

[F3] The deficiency-one Fox rule of [[lem-the-deficiency-one-fox-calculus-determinant-rule]]: deleting the column of a generator $c$ with $\varphi(c)\neq1$ and dividing the determinant of the remaining square matrix by $1-\varphi(c)$ gives the evaluation of the Alexander invariant, up to a unit of $\mathbb Z[H]$.

[F4] The coloured reduced Burau matrix of [[def-coloured-reduced-burau-matrix]] is the matrix product of the $\overline C_i(a_r)^{\pm1}$ along an Artin word, with $a_r$ the label of the undercrossing string at crossing $r$; each factor is invertible with determinant $-a$ if the label is $a$. At equal labels $t_1=\cdots=t_n=t$ the specialisation is the standard reduced Burau matrix of [[def-reduced-burau-representation]] up to the fixed basis change of the coloured matrix; in particular the characteristic polynomials agree (Morton, Remark (1)).

[F5] The one-variable Alexander polynomial $\Delta_L$ and the Alexander invariant $D_L=\Delta_L$ for a link with more than one component, $D_L=\Delta_L/(1-t)$ for a knot, of [[def-alexander-polynomial-from-the-first-elementary-ideal]], defined from the Alexander module of [[def-one-variable-alexander-module-of-an-oriented-link]]; the one-variable module is the cover classified by the total linking homomorphism.

[F6] **Literature input (quoted).** Torres--Fox deletion (Morton, Remark (2), printed p. 3): for a link $L\cup C$ with meridian of $C$ replaced by $1$, $D_L(t)=\Delta_{L\cup C}(t,1)/(1-\varphi(c))$, where $\varphi(c)$ is the element represented by $C$ in the complement of $L$; for the axis $C=A$ one has $\varphi(A)=t_1t_2\cdots t_n$ (Conway, Theorem 3.15 and its proof, where the same deletion is computed through the twisted chain complex).

[F7] **Literature input (quoted).** Birman--Brendle, section 4.2 equation (15): for the closure $b(X)$ of a braid $X\in B_n$ the Alexander polynomial satisfies $\Delta_{b(X)}(t)=\det(\bar\rho(X)-I_{n-1})/(1+t+\cdots+t^{n-1})$ up to the usual unit, where $\bar\rho$ is the reduced Burau representation; by Morton's Remark (1) the equal-label coloured matrix $B_\beta(t)$ is a matrix of that representation, so the same display reads $\Delta_{\widehat\beta}(t)\doteq(1-t)\det(I-B_\beta(t))/(1-t^n)$ up to sign. This one-variable normalization is the classical formula for knots and links and is quoted here; the identity between $B_\beta(t)$ and the matrix of the reduced Burau representation is verified in the next proposition on this page.



## Proof

1.1 **The diagram basis and elementary substitutions.** The reverse partial products of [F1] are a free basis, since $u_i=g_i g_{i-1}^{-1}$. Direct substitution gives $\Gamma_i(g_i)=g_{i+1}g_i^{-1}g_{i-1}$ and $\Gamma_i^{-1}(g_i)=g_{i-1}g_i^{-1}g_{i+1}$; every other $g_j$, including $g_n$, is fixed. Thus [F1] supplies a deficiency-one presentation of the closed braid and axis, with $n+1$ generators and $n$ relations. Deleting the column of $c$ is admissible because $\varphi(c)=x\ne1$. [F1, given, algebra]

2.1 **The Jacobian product with transported labels.** Put $\Gamma_r=\Gamma_{i_r}^{\varepsilon_r}$ and $S_r=\Gamma_l\circ\cdots\circ\Gamma_r$, with $S_{l+1}=\mathrm{id}$. Since $S_r=S_{r+1}\circ\Gamma_r$, [F2] gives $\varphi(J(S_r))=\varphi(S_{r+1}(J(\Gamma_r)))\varphi(J(S_{r+1}))$. For a positive crossing, step 1.1 and the product rule give the exceptional row $(g_{i+1}g_i^{-1},-g_{i+1}g_i^{-1},1)$, truncated at $i=1$; for a negative crossing the row is $(1,-g_{i-1}g_i^{-1},g_{i-1}g_i^{-1})$. The suffix $S_{r+1}$ expresses the meridians immediately below crossing $r$ in the bottom generators. Hence the positive coefficient is $\varphi(S_{r+1}(u_{i+1}))=a_r$, while the negative coefficient is $\varphi(S_{r+1}(u_i))^{-1}=a_r^{-1}$: these are precisely the undercrossing labels of [F4]. Their reduced blocks are $\overline C_{i_r}(a_r)^{\varepsilon_r}$. Iterating the displayed recurrence therefore gives $\varphi(J(T_\beta))=\tilde B_\beta=\begin{pmatrix}\overline B_\beta&v\\0&1\end{pmatrix}$, with the leading factors in the defined word order. This calculation concerns $T_\beta$ of [F1]. [F1, F2, F4, step 1.1, algebra]

3.1 **The relation matrix.** Differentiate $T_\beta(g_i)-c^{-1}g_ic$ with respect to the $g_j$. The second term evaluates to $x^{-1}\delta_{ij}$, so deleting the column of $c$ leaves $\tilde B_\beta-x^{-1}I_n$. Its block form in step 2.1 gives $\det(\tilde B_\beta-x^{-1}I_n)=(1-x^{-1})\det(\overline B_\beta-x^{-1}I_{n-1})$. [F1, F2, step 2.1, algebra]

4.1 **The Fox rule and the characteristic polynomial.** Apply [F3] with the deleted generator $c$ and the divisor $1-\varphi(c)=1-x$, which cancels the explicit factor $1-x^{-1}$ up to the unit $-x^{-1}$ of step 3.1: $\Delta_{\widehat\beta\cup A}\doteq -x^{-1}\det\bigl(\overline B_\beta-x^{-1}I_{n-1}\bigr)\doteq\det\bigl(I-x\,\overline B_\beta\bigr)$, since $\det(x\overline B_\beta-I_{n-1})=(-1)^{n-1}\det(I-x\overline B_\beta)$ and $x$ is a unit. The variable identifications $t_{\pi(j)}=t_j$ are those of the closed braid: strings joined at the top and bottom carry the same meridian. This proves (1). [F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 **Deletion of the axis.** Put $x=1$ and apply the Torres--Fox deletion of [F6] to the pair $(\widehat\beta,A)$ with $\varphi(A)=t_1t_2\cdots t_n$ and the identifications $t_{\pi(j)}=t_j$; part (1) at $x=1$ gives the multivariable identity $D^{\mathrm{mv}}_{\widehat\beta}(t_1,\dots,t_n)\doteq\det\bigl(I-\overline B_\beta(t_1,\dots,t_n)\bigr)/(1-t_1t_2\cdots t_n)$, the first display of (2). In the one-variable specialisation $t_1=\cdots=t_n=t$ the denominator becomes $1-t^n$ and the coloured matrix becomes $B_\beta(t)$; the one-variable normalization $\Delta_{\widehat\beta}(t)\doteq(1-t)\det(I-B_\beta(t))/(1-t^n)$ is the quoted classical formula [F7], so the equal-label multivariable invariant is $\Delta_{\widehat\beta}(t)/(1-t)$, rather than the library's multi-component normalization $D=\Delta$. [F4, F6, F7, step 4.1, algebra]

6.1 **Knot and multi-component normalisations.** Suppose first that $\pi$ is an $n$-cycle, so that the closure is a knot. By [F5] the knot normalisation is $D=\Delta/(1-t)$, and using $1-t^n=(1-t)(1+t+\cdots+t^{n-1})$ gives $\Delta_{\widehat\beta}(t)\doteq\det(I-B_\beta(t))/(1+t+\cdots+t^{n-1})$, equivalently $D_{\widehat\beta}(t)\doteq\det(I-B_\beta(t))/(1-t^n)$ up to units. If instead $\pi$ has $k$ disjoint cycles, the identifications $t_{\pi(j)}=t_j$ leave one variable per cycle, and the multivariable identity of step 5.1 is a $k$-variable statement; the one-variable formula of step 5.1 is the classical formula [F7] and requires no knot hypothesis, so it computes $\Delta_{\widehat\beta}$ for a link as well, with $D_{\widehat\beta}=\Delta_{\widehat\beta}$ for $k>1$ by [F5]. Thus for $k>1$ the latter is $(1-t)$ times the equal-label specialization of $D^{\mathrm{mv}}$, as explicitly stated; the same determinant formula for the polynomial retains its factor $1-t$. This proves the displayed normalisations of (2). [F5, F7, step 5.1, algebra] ∎

## Remarks

- The unit ambiguity in (1) includes a power of $x$; the displayed form $\det(I-x\overline B_\beta)$ is the normalization of Morton's Theorem 1.
- The equal-label matrix $B_\beta(t)$ agrees with the matrix of the reduced Burau representation of [[def-reduced-burau-representation]] after the fixed basis change of [F4]; this is what [[prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid]] uses to rewrite the determinant for the representation-theoretic object.
- The Fox rule [F3] is the quoted literature input of [[lem-the-deficiency-one-fox-calculus-determinant-rule]]; steps 1.1–1.3 use Morton's diagram presentation and the explicitly ordered Fox chain rule, and the deletion of step 3.1 is Morton's Remark (2) and Conway's Theorem 3.15.
