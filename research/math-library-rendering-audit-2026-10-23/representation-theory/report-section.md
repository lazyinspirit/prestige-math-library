## Representation Theory of Groups

Completed visual review of **709 items across 64 pages**, with **1543 image tiles**. Findings: 2 uncertain, 9 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/representation-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/representation-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/representation-theory/category-review-receipt.json).

### Confirmed rendering defects

#### representation-theory / confirmed 001: `def-heisenberg-group-of-a-symplectic-vector-space`

- Location: **Definition**; source lines 30, 31, 32.
- Pages: `regular-weyl-representations-and-stone-von-neumann`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/def-heisenberg-group-of-a-symplectic-vector-space--01.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/def-heisenberg-group-of-a-symplectic-vector-space.md).

Exact frozen source lines:

```text
30: $$H(V,\omega):=V\times\mathbb R$$with the product topology and multiplication$$
31: (v,t)(w,s)=\left(v+w,\ t+s-\frac12\omega(v,w)\right).
32: $$
```

#### representation-theory / confirmed 002: `def-heisenberg-group-of-a-symplectic-vector-space`

- Location: **Definition**; source lines 43, 44, 45.
- Pages: `regular-weyl-representations-and-stone-von-neumann`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/def-heisenberg-group-of-a-symplectic-vector-space--01.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/def-heisenberg-group-of-a-symplectic-vector-space.md).

Exact frozen source lines:

```text
43: ```tikzcd
44: 1 \arrow[r] & \mathbb R \arrow[r, hook, "j"] & H(V,\omega) \arrow[r, two heads, "\operatorname{pr}_V"] & V \arrow[r] & 1
45: ```
```

#### representation-theory / confirmed 003: `ex-unitary-induction-from-the-trivial-subgroup`

- Location: **Proof**; source lines 53.
- Pages: `induced-unitary-representations-of-locally-compact-groups-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/ex-unitary-induction-from-the-trivial-subgroup--01.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/ex-unitary-induction-from-the-trivial-subgroup.md).

Exact frozen source lines:

```text
53: 2.1 Covariance is empty for the trivial subgroup, so the dense model is $C_c(G)$ and its completion is $L^2(G)$. The density cocycle is $D_g(x)=1$, hence the induced action is $F(x)\mapsto F(g^{-1}x)$, exactly [F3]. The construction theorem [F1] supplies strong continuity and unitarity. [A1, F1, F2, F3, step 1.1] ## Sources Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix E §E.1, Example E.1.8(i), PDF p. 414; Vogan, *On the Definition of Induced Representations*, §2. All relevant lines were inspected. [F3, F1, A1, F2, step 1.1] ∎
```

#### representation-theory / confirmed 004: `lem-closed-subgroup-quotient-averaging-and-compact-lifts`

- Location: **Proof**; source lines 54.
- Pages: `induced-unitary-representations-of-locally-compact-groups`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/lem-closed-subgroup-quotient-averaging-and-compact-lifts--02.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/lem-closed-subgroup-quotient-averaging-and-compact-lifts.md).

Exact frozen source lines:

```text
54: 3.1 Let $\phi\in C_c(X)$ and $Q=\operatorname{supp}\phi$. By [A1], choose a lift $x_q$ of each $q\in Q$. For each lift apply [F1] to the singleton and a relatively compact open neighborhood to obtain a nonnegative $u_q\in C_c(G)$ with $u_q(x_q)=1$. A nonzero left Haar measure has full support: its support is a nonempty closed set invariant under every left translation, hence is all of $H$. Thus $u_q(x_q\cdot)$ has positive integral on $H$, so $T_Hu_q(q)>0$. By continuity from step 2.2, $T_Hu_q$ stays positive on a neighborhood of $q$. A finite subcover of $Q$ gives $u=\sum_i u_{q_i}$ with $T_Hu>0$ on an open neighborhood $W$ of $Q$. The function $\psi=\phi/(T_Hu)$ on $W$, extended by zero, is in $C_c(X)$ because its support is contained in the compact set $Q\subset W$. Set $f=(\psi\circ p)u$. Then $f\in C_c(G)$ and $T_Hf=\psi T_Hu=\phi$, also when $\phi=0$ (use $f=0$). Thus $T_H:C_c(G)\to C_c(X)$ is onto; compact lifts were proved in step 2.1. ∎ [A1, F1, F2, step 1.1, step 2.1, step 2.2, choose, construct] ## Sources
```

#### representation-theory / confirmed 005: `thm-induced-representation-is-independent-of-rho-function-and-measure-representative`

- Location: **Proof**; source lines 63.
- Pages: `induced-unitary-representations-of-locally-compact-groups`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/thm-induced-representation-is-independent-of-rho-function-and-measure-representative--02.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/thm-induced-representation-is-independent-of-rho-function-and-measure-representative.md).

Exact frozen source lines:

```text
63: 3.1 For an equivalent quasi-invariant $\nu$, [F3] supplies local densities $w=d\nu/d\mu_\rho>0$ on each open sigma-compact component. Multiplication by $w^{-1/2}$ is a unitary from the $\mu_\rho$ section space to the $\nu$ section space, since $d\nu=w\,d\mu_\rho$. On each open $\sigma$-compact target component, $g^{-1}$ maps it to an open $\sigma$-compact set meeting only countably many components, so the componentwise densities are measurable there. Pushing $w\mu_\rho$ forward under $q\mapsto gq$ gives the local Radon--Nikodym derivative $$D_g^\nu(q)=\frac{w(g^{-1}q)}{w(q)}D_g^\rho(q)$$ almost everywhere on that component. The componentwise multiplication maps assemble on the Hilbert direct sum, and substitution in the action formula gives $U\Pi_\rho(g)=\Pi_\nu(g)U$ almost everywhere. Thus the general measure representative gives the same unitary representation. ∎ [A1, F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 2.2] ## Sources
```

#### representation-theory / confirmed 006: `ex-frobenius-normal-two-complement-for-s3`

- Location: **frontmatter title**; source lines 4.
- Pages: `frobenius-groups-and-the-normal-complement-theorem-examples`.
- Visible defect: The title displays S_3 with a literal underscore and baseline 3 instead of a typeset subscript.
- Future repair: Write the group name in inline math, e.g. $S_3$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/ex-frobenius-normal-two-complement-for-s3--01.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/ex-frobenius-normal-two-complement-for-s3.md).

Exact frozen source lines:

```text
4: title: "Frobenius normal two complement for S_3"
```

#### representation-theory / confirmed 007: `ex-brauer-pair-branching-for-c3-semidirect-d8-in-characteristic-two`

- Location: **frontmatter title**; source lines 4.
- Pages: `blocks-defect-groups-and-the-brauer-homomorphism-examples`.
- Visible defect: The title renders the group names as plain lowercase c3 and d8, losing the standard group notation and semidirect-product symbol used by the example.
- Future repair: Use a math-formatted group expression such as $C_3\rtimes D_8$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/ex-brauer-pair-branching-for-c3-semidirect-d8-in-characteristic-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/ex-brauer-pair-branching-for-c3-semidirect-d8-in-characteristic-two.md).

Exact frozen source lines:

```text
4: title: Brauer pair branching for c3 semidirect d8 in characteristic two
```

#### representation-theory / confirmed 008: `thm-classification-of-the-irreducible-unitary-dual-of-sl2-r`

- Location: **frontmatter title**; source lines 4.
- Pages: `sl2-r-discrete-series-and-unitary-dual`.
- Visible defect: The title renders SL2(R) as plain text without the standard subscript in SL_2 or blackboard-bold real field symbol.
- Future repair: Format the group name in math, e.g. $\mathrm{SL}_2(\mathbb{R})$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/thm-classification-of-the-irreducible-unitary-dual-of-sl2-r--01.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/thm-classification-of-the-irreducible-unitary-dual-of-sl2-r.md).

Exact frozen source lines:

```text
4: title: Classification of the irreducible unitary dual of SL2(R)
```

#### representation-theory / confirmed 009: `thm-parabolic-mackey-formula-for-finite-gl-n`

- Location: **frontmatter title**; source lines 4.
- Pages: `bruhat-decomposition-and-flags-over-finite-fields`.
- Visible defect: The title renders GL_n with a literal underscore and baseline n instead of a typeset subscript.
- Future repair: Write the group name in inline math, e.g. $\mathrm{GL}_n$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/thm-parabolic-mackey-formula-for-finite-gl-n--01.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/thm-parabolic-mackey-formula-for-finite-gl-n.md).

Exact frozen source lines:

```text
4: title: Parabolic Mackey formula for finite GL_n
```

### Uncertain observations

#### representation-theory / uncertain 001: `def-principal-series-module-for-finite-gl-n`

- Location: **Item body**; source lines 4.
- Pages: `principal-series-representations-of-gl-n-over-a-finite-field`.
- Visible defect: The title contains the literal plain-text token GL_n; the underscore is visible in the h1 and n is not typeset as a subscript.
- Future repair: Typeset the group name, for example $\mathrm{GL}_n$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/def-principal-series-module-for-finite-gl-n--01.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/def-principal-series-module-for-finite-gl-n.md).

Exact frozen source lines:

```text
4: title: "The principal series module for finite GL_n"
```

#### representation-theory / uncertain 002: `thm-sl-n-r-has-property-t-for-n-at-least-three`

- Location: **Item body**; source lines 5.
- Pages: `kazhdans-property-t-and-spectral-gap`.
- Visible defect: The title displays SLn(R) as plain text, without the subscript on n or the conventional real-field symbol.
- Future repair: Typeset the group name, for example $\mathrm{SL}_n(\mathbb R)$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/representation-theory/screenshots/thm-sl-n-r-has-property-t-for-n-at-least-three--01.png); [frozen source](math-library-rendering-audit-2026-10-23/representation-theory/snapshots/thm-sl-n-r-has-property-t-for-n-at-least-three.md).

Exact frozen source lines:

```text
5: title: SLn(R) has property (T) for n at least three
```

