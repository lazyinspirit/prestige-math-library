---
id: lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic
kind: lemma
title: "A square-conic blowup has cubic-controlled singular successors"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 15
deps: [
          def-axiom-of-choice, def-dependent-choice,
                    lem-nonsquare-tangent-conic-rational-surface-blowups-terminate,
                    lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function,
                    thm-affine-blowup-standard-charts,
                    thm-height-one-localisation-of-normal-noetherian-domain-is-dvr, thm-nakayama-lemma,
                    def-rational-normal-surface-singularity-and-bounded-modification-h1,
                    lem-surface-regular-fibres-preserve-normality,
                    lem-rational-surface-local-rings-propagate-by-point-sequence-spreading,
                    lem-local-normal-surface-modification-dimension-and-projective-cohomology]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.8\u201354.9: complete source arguments with local prerequisite replacements"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC and DC. For a rational Gorenstein normal local surface singularity with square tangent conic, choose $\mathfrak m=(x_1,x_2,z)$ and a relation $z^2=\sum a_{ijk}x_ix_jx_k$. There is a nonzero homogeneous cubic $H\in\kappa[X_1,X_2]$ whose zero scheme on the reduced exceptional line contains all singular successors. Simple closed zeros have nonsquare successor conic and therefore finite resolution. There is at most one possible square-conic successor, and it is $\kappa$-rational. This is a branching statement, not termination of the continuing square branch.

## Facts & Assumptions

**Given:** A rational Gorenstein normal local surface singularity with square tangent conic, generators $\mathfrak m=(x_1,x_2,z)$ and a relation $z^2=\sum a_{ijk}x_ix_jx_k$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-nonsquare-tangent-conic-rational-surface-blowups-terminate.* Assume AC and DC. For a nonregular rational normal local surface domain in the permitted class with invertible canonical module and normal completion, if its tangent-conic quadratic is not a scalar times a square, repeatedly blowing up its singular points terminates in a regular model. ([[lem-nonsquare-tangent-conic-rational-surface-blowups-terminate]])

[F4] *lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function.* Assume AC and DC. Let $A$ be a nonregular rational normal local surface domain in the permitted canonical-module setting, with $\omega_A\cong A$. Then its point blowup is normal with trivial canonical module. Its exceptional conormal $L$ has degree two and $\dim_\kappa\mathfrak m^n/\mathfrak m^{n+1}=2n+1$. ([[lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function]])

[F5] *thm-affine-blowup-standard-charts.* Assume the Axiom of Choice as inherited from the Proj construction. Let $A$ be a ring, $I=(f_0,\dots,f_r)\subseteq A$, $S=R(I)=\bigoplus I^nt^n$ and $B_i=A[I/f_i]=\bigl(S[(f_it)^{-1}]\bigr)_0$. The standard opens $U_i=D_+(f_it)=\operatorname{Spec}B_i$ cover $\operatorname{Bl}_I\operatorname{Spec}A$. Put $u_{ij}=(f_jt)/(f_it)$ in $B_i$. ([[thm-affine-blowup-standard-charts]])

[F6] *thm-height-one-localisation-of-normal-noetherian-domain-is-dvr.* Let $R$ be a Noetherian integrally closed domain, and let $\mathfrak p$ be a prime ideal of height $1$. Then the localisation $R_{\mathfrak p}$ is a discrete valuation ring. ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]])

[F7] *thm-nakayama-lemma.* Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$. ([[thm-nakayama-lemma]])

[F8] A normal essentially finite-type local ring over a field or complete equicharacteristic Noetherian local base has normal maximal-adic completion, a domain. ([[lem-surface-regular-fibres-preserve-normality]])

[F9] Rationality propagates from a permitted normal local surface domain to a normal two-dimensional local domain with the same fraction field essentially of finite type over it. ([[lem-rational-surface-local-rings-propagate-by-point-sequence-spreading]])

[F10] Rationality here is defined for normal two-dimensional Noetherian local domains essentially of finite type over a field or complete equicharacteristic local base. ([[def-rational-normal-surface-singularity-and-bounded-modification-h1]])

[F11] Closed points of an integral modification over a normal Noetherian local surface domain have local dimension two. ([[lem-local-normal-surface-modification-dimension-and-projective-cohomology]])

## Proof

1.1 A square tangent conic means that the quadratic $q$ is the square of a linear form, so the exceptional fibre is twice the reduced exceptional line $C\cong\mathbb P^1_\kappa$; in the $x_1$-chart of the standard blowup charts put $y=x_2/x_1$ and $w=z/x_1$, so that dividing the relation by $x_1^2$ gives $w^2=x_1G$, where $G$ is the cubic expression in the chart coordinates with coefficients from $A$. Its restriction to $C$ is $h(y)$, obtained by setting $w=0$ and reducing coefficients modulo $\mathfrak m$. Homogenizing gives the cubic $H$ on $C$; thus $h$ is the restricted bracket, rather than the entire chart equation. [F4, F5, given]

1.2 By the rational-domain definition [F10], $A$ is in the field or complete equicharacteristic finite-type class. The blowup is normal with trivial canonical module by [F4]. Every closed successor local ring $B$ has dimension two by [F11], has the same fraction field and is essentially of finite type over $A$, hence remains in that class and is rational by [F9]. Its canonical module is the stalk of the trivial module supplied by [F4]. Finally [F8] gives normal completion of $B$. These establish all hypotheses needed to apply [F3] at a singular successor. [F4, F8, F9, F10, F11, given]

2.1 At the generic point of $C$ the local ring is a discrete valuation ring with maximal ideal $(x_1,w)$; the exceptional divisor has multiplicity two, so $v(x_1)=2$. Since $(x_1,w)$ generates the DVR maximal ideal, $v(w)=1$, and $w^2=x_1G$ gives $v(G)=0$, that is, the bracket is a unit and $H$ is not identically zero on the reduced line; the $x_2$-chart gives the corresponding homogeneous cubic on $C$. [F6, step 1.1]

3.1 At a closed point of $C$ whose local maximal ideal is generated by $x_1$, $w$ and a lift $g$ of the prime polynomial on the affine line, nonvanishing of $H$ lets the relation express $x_1$ modulo the square of that maximal ideal; Nakayama's lemma then leaves at most two generators of the cotangent space, so the normal local surface ring is regular; hence every singular successor is a zero of $H$. [F7, step 2.1]

4.1 If the prime polynomial of such a point divides $H$ exactly once, its tangent quadratic has the form $w^2-x_1(\alpha x_1+\beta w+ug)$ with $u\ne0$ in the residue field; this is not a scalar multiple of a square, because the vanishing of the $g^2$ coefficient would force the $g$-coefficient of a proposed linear square to vanish, contradicting the nonzero $x_1g$ coefficient; the nonsquare-conic termination lemma therefore resolves that branch, even when its residue field extends $\kappa$. [F3, step 1.2, step 3.1]

5.1 A remaining square-conic successor must be a multiple closed zero of $H$; a nonzero homogeneous cubic on $\mathbb P^1$ has total zero-degree three, so it has at most one multiple closed zero, and that zero has degree one; hence there is at most one possible square-conic successor and it is $\kappa$-rational. [F4, step 3.1, step 4.1]

6.1 Thus the zero scheme of $H$ on the reduced exceptional line contains all singular successors, simple closed zeros have nonsquare successor conic and finite resolution, and at most one $\kappa$-rational square-conic successor can occur; this is a branching statement and does not by itself terminate the continuing square branch, and the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, step 4.1, step 5.1] ∎

## Remarks

- The cubic $H$ is a genuine invariant of the square-conic point; its simple and multiple zeros have different successor behaviour.
- Higher-order terms and coordinate square corrections are treated in the dedicated square-branch lemmas.
