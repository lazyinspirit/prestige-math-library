---
id: cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two
kind: counterexample
title: SL_2 and PGL_2 have the same Lie algebra but differ globally
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-countable-choice, def-lie-bracket-on-the-tangent-space-of-a-lie-group, thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group, thm-mobius-group-and-projective-linear-identification, def-invertible-matrix-and-general-linear-group, def-special-linear-lie-algebra-sl-two]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Example 3.14 (determinant-one matrix groups); quotient calculation proved locally"
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§3.8 on connected groups with the same Lie algebra, printed pp. 39-45"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement refuted

A connected Lie group is determined up to isomorphism by its Lie algebra, so
two connected Lie groups with the same complex semisimple Lie algebra are
isomorphic.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. The groups $\operatorname{SL}_2(\mathbb C)$ and $\operatorname{PGL}_2(\mathbb C)=\operatorname{GL}_2(\mathbb C)/(\mathbb C^{\times}I)$, and their Lie algebras.

[L1] The Möbius group is $\operatorname{GL}_2(\mathbb C)/(\mathbb C^{\times}I)=\operatorname{PGL}_2(\mathbb C)$, so $\operatorname{PGL}_2(\mathbb C)$ is a quotient of $\operatorname{GL}_2(\mathbb C)$ by the normal subgroup $\mathbb C^{\times}I$ ([[thm-mobius-group-and-projective-linear-identification]], [[def-invertible-matrix-and-general-linear-group]]).

[L2] The traceless matrices form the complex Lie algebra $\mathfrak{sl}_2(\mathbb C)$ under the commutator, with basis $e,f,h$ satisfying $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$. [[def-special-linear-lie-algebra-sl-two]].

[A1] Countable choice is assumed for the following differential-geometric interfaces. [[def-countable-choice]].

[L3] Under $\mathrm{AC}_\omega$, a closed normal subgroup $N$ of a finite-dimensional real Lie group $G$ has a quotient Lie group with tangent Lie algebra $\mathfrak g/\mathfrak n$. [[thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group]].

[L4] Under $\mathrm{AC}_\omega$, the tangent bracket is the value at the identity of the commutator of the left-invariant extensions. [[def-lie-bracket-on-the-tangent-space-of-a-lie-group]].

## Proof

**Proof technique:** explicit witness.

1.1 The open set $\operatorname{GL}_2(\mathbb C)\subset M_2(\mathbb C)$ is a complex Lie group: multiplication is polynomial and inversion is the adjugate divided by the nonzero determinant. The determinant-one subset is a complex submanifold: on the open set where the entry $a\ne0$, the equation $ad-bc=1$ solves $d=(1+bc)/a$; at any other matrix at least one entry is nonzero and one solves for its opposite entry in the same way. These charts cover the subset, and the restricted group operations are holomorphic. Differentiating the determinant at $I$ gives $\operatorname{tr}X$, and the chart at $I$ shows that every traceless $X$ is tangent to this subset. For either matrix group the left-invariant extension of $X$ is $A\mapsto AX$; the field commutator with $A\mapsto AY$ is $A\mapsto A(XY-YX)$. Thus their tangent Lie algebras are respectively $M_2(\mathbb C)$ and $\mathfrak{sl}_2(\mathbb C)$. [A1, L2, L4, algebra]

1.2 The algebra $\mathfrak{sl}_2(\mathbb C)$ is simple, hence semisimple. Indeed a nonzero ideal is invariant under $\operatorname{ad}h$, whose distinct eigenvalues on $e,f,h$ are $2,-2,0$. Polynomial spectral projections show that the ideal contains a nonzero multiple of at least one of these basis vectors. Bracketing with the others then puts all three in the ideal. Moreover $[\mathfrak{sl}_2,\mathfrak{sl}_2]=\mathfrak{sl}_2$, so the whole algebra is not solvable; it therefore has no nonzero solvable ideal. [L2, algebra]

1.3 The group $\operatorname{SL}_2(\mathbb C)$ is path connected.  Indeed, if $g=\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)$ has $a\ne0$, then $$g=\begin{pmatrix}1&0\\c/a&1\end{pmatrix}\begin{pmatrix}a&0\\0&a^{-1}\end{pmatrix}\begin{pmatrix}1&b/a\\0&1\end{pmatrix}.$$ Each unipotent factor is joined to $I$ by multiplying its off-diagonal entry by $t\in[0,1]$, and the diagonal factor is joined to $I$ along $\operatorname{diag}(\gamma(t),\gamma(t)^{-1})$ for any path $\gamma$ in $\mathbb C^\times$ from $1$ to $a$.  If $a=0$, then $c\ne0$, and the path $\left(\begin{smallmatrix}1&t\\0&1\end{smallmatrix}\right)g$ joins $g$ to a matrix whose upper-left entry is $c\ne0$, reducing to the preceding case. [L2, algebra]

1.4 $Z(\operatorname{SL}_2(\mathbb C))=\{\pm I\}$: a central matrix commutes in particular with the unipotent one-parameter subgroups generated by $E_{12}$ and $E_{21}$, hence with $E_{12}$ and $E_{21}$; it is therefore scalar, and determinant one leaves precisely $\pm I$. [L2, algebra]

1.5 $Z(\operatorname{PGL}_2(\mathbb C))$ is trivial: a central projective transformation commutes with every dilation $z\mapsto az$, so it preserves their common fixed set $\{0,\infty\}$; commuting also with the inversion $z\mapsto1/z$ and translations $z\mapsto z+b$ forces it to fix $0,1,\infty$, hence it is the identity Möbius transformation. [L1, algebra]

2.1 The scalar subgroup is closed in $\operatorname{GL}_2(\mathbb C)$, being defined there by zero off-diagonal entries and equal diagonal entries. It is normal, and its tangent algebra is $\mathbb CI$. Consequently [L3], applied to the underlying real groups, gives the quotient tangent algebra $M_2(\mathbb C)/\mathbb CI$. The quotient is also a complex Lie group: on the set of classes with a selected matrix entry nonzero, normalize that entry to $1$. The other three entries give an open subset of $\mathbb C^3$ with determinant nonzero. Transition functions and the locally expressed group operations are rational with nonzero denominators, hence holomorphic. These charts agree with the smooth quotient charts since normalization is a smooth local section. The tangent quotient map is complex linear. Finally $[X]\mapsto X-\tfrac12\operatorname{tr}(X)I$ is a well-defined complex-linear bijection to $\mathfrak{sl}_2(\mathbb C)$ preserving commutators, since scalar matrices commute and commutators have trace zero. [A1, L1, L2, L3, step 1.1, algebra]

2.2 The group $\operatorname{GL}_2(\mathbb C)$ is path connected: for $g\in\operatorname{GL}_2(\mathbb C)$ choose $z\in\mathbb C^\times$ with $z^2=\det g$; then $z^{-1}g\in\operatorname{SL}_2(\mathbb C)$, and paths in $\operatorname{SL}_2(\mathbb C)$ and $\mathbb C^\times$ join $g=z(z^{-1}g)$ to $I$.  Its quotient $\operatorname{PGL}_2(\mathbb C)$ is therefore connected. [L1, step 1.3]

3.1 An isomorphism of groups carries the center onto the center, so $\operatorname{SL}_2(\mathbb C)$ and $\operatorname{PGL}_2(\mathbb C)$ are not isomorphic, although steps 1.3 and 2.2 show both are connected and steps 1.1, 1.2, and 2.1 give both the complex semisimple Lie algebra $\mathfrak{sl}_2(\mathbb C)$. This witnesses the failure of the claim: the two groups are distinct global forms of the same Lie algebra. [L1, L2, step 1.1, step 2.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.2] ∎
