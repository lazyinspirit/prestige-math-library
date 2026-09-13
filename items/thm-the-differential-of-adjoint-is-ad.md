---
id: thm-the-differential-of-adjoint-is-ad
kind: theorem
title: The differential of Ad is ad
status: draft
origin: pipeline
deps: ["def-countable-choice", "prop-adjoint-is-a-smooth-lie-group-representation", "def-conjugation-and-the-adjoint-representation-of-a-lie-group", "def-adjoint-representation-of-a-lie-algebra", "def-left-and-right-translations-on-a-lie-group", "def-left-and-right-invariant-vector-fields", "thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity", "def-lie-bracket-on-the-tangent-space-of-a-lie-group", "thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields", "def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism", "def-lie-derivative-of-a-vector-field", "thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Proposition 1.91 and complete proof, printed pages 80–81
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Lemma 3.15(1) and complete proof, printed page 33
    - title: Robert L. Bryant, An Introduction to Lie Groups and Symplectic Geometry
      url: https://math.duke.edu/~bryant/ParkCityLectures.pdf
      locator: Lecture 2, Proposition 7 and complete proof, printed pages 21–22
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group
with Lie algebra $\mathfrak g$. Under the canonical open-subset identification

$$T_I\operatorname{GL}(\mathfrak g)\simeq\operatorname{End}(\mathfrak g),$$

the differential of the adjoint representation at the identity is

$$d(\operatorname{Ad})_e(X)=\operatorname{ad}_X\qquad(X\in\mathfrak g).$$

Consequently
$[\operatorname{ad}_X,\operatorname{ad}_Y]=\operatorname{ad}_{[X,Y]_G}$.
The countable-choice assumption is used exactly through the supplied smooth
invariant-field, tangent-bracket, exponential, and vector-field pushforward
interfaces.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$ with
identity $e$, Lie algebra $\mathfrak g=T_eG$, and $X,Y\in\mathfrak g$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] The adjoint map is smooth and satisfies
$\operatorname{Ad}_g=d(C_g)_e$.
[[prop-adjoint-is-a-smooth-lie-group-representation]],
[[def-conjugation-and-the-adjoint-representation-of-a-lie-group]].

[F3] Left and right translations are $L_g(h)=gh$ and $R_g(h)=hg$; the
left-invariant extension is $Y^L_h=d(L_h)_eY$.
[[def-left-and-right-translations-on-a-lie-group]],
[[def-left-and-right-invariant-vector-fields]],
[[thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity]].

[F4] The tangent bracket is characterized by
$[X^L,Y^L]=[X,Y]_G^L$.
[[def-lie-bracket-on-the-tangent-space-of-a-lie-group]].

[F5] The curve $t\mapsto\exp(tX)$ is the one-parameter subgroup and the
integral curve of $X^L$ through $e$.
[[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]].

[F6] For the flow $\Phi_t$ of a field $Z$,
$\mathcal L_ZW=\left.\frac d{dt}\right|_0(\Phi_{-t})_*W$, and
$\mathcal L_ZW=[Z,W]$.
[[def-lie-derivative-of-a-vector-field]],
[[thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket]].

[F7] Diffeomorphism pushforward is defined by its differential on field
values. [[def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism]].

[F8] Differentials obey the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

[F9] The adjoint Lie-algebra representation satisfies
$\operatorname{ad}_X(Y)=[X,Y]$ and
$[\operatorname{ad}_X,\operatorname{ad}_Y]=\operatorname{ad}_{[X,Y]}$.
[[def-adjoint-representation-of-a-lie-algebra]].

## Proof

**Proof technique:** direct.

1.1 For $g,h\in G$, the identity $C_g\circ L_h=L_{C_g(h)}\circ C_g$ and the chain rule show that $(C_g)_*Y^L=(\operatorname{Ad}_gY)^L$: at the point $C_g(h)$ both sides equal $d(L_{C_g(h)})_e\,d(C_g)_eY$. [F2, F3, F7, F8, algebra]

1.2 By [F5] and left invariance, $\Phi_t(h)=h\exp(tX)=R_{\exp(tX)}(h)$ is the global flow of $X^L$: differentiating $L_h(\exp(tX))$ gives $X^L_{h\exp(tX)}$. Since left and right translations commute, $(R_a)_*Y^L$ is left invariant for every $a$. Therefore left translation fixes that field, and $C_{\exp(tX)}=L_{\exp(tX)}\circ R_{\exp(-tX)}$ gives $(C_{\exp(tX)})_*Y^L=(R_{\exp(-tX)})_*Y^L$. [F3, F5, F7, F8, algebra]

2.1 Differentiate the last identity of step 1.2 at $t=0$. By the inverse-time convention and equality in [F6], its right side has derivative $\mathcal L_{X^L}Y^L=[X^L,Y^L]=[X,Y]_G^L$, where the last equality is [F4]. Step 1.1 identifies the left side with $(\operatorname{Ad}_{\exp(tX)}Y)^L$. Evaluating the differentiated fields at $e$ thus yields $\left.\frac d{dt}\right|_0\operatorname{Ad}_{\exp(tX)}Y=[X,Y]_G$. [F4, F6, step 1.1, step 1.2]

3.1 The curve $t\mapsto\exp(tX)$ has initial velocity $X$ by [F5]. Apply the chain rule [F8] to $t\mapsto\operatorname{Ad}_{\exp(tX)}$ and then to the linear evaluation map $A\mapsto A(Y)$. Under $T_I\operatorname{GL}(\mathfrak g)=\operatorname{End}(\mathfrak g)$, step 2.1 becomes $(d(\operatorname{Ad})_eX)(Y)=[X,Y]_G=\operatorname{ad}_X(Y)$. Since this holds for every $Y$, $d(\operatorname{Ad})_eX=\operatorname{ad}_X$. [F2, F5, F8, F9, step 2.1]

4.1 The final commutator identity follows from [F9], now with the map in [F9] identified by step 3.1 with the differential of the group adjoint representation. [F9, step 3.1]

5.1 A Lie group is nonempty and boundaryless. If $\dim G=0$, every tangent space in the claim is zero; in dimension one the Lie bracket and both sides are zero, while the same proof applies. Degenerate adjoint maps are allowed. The flows are global, so there is no endpoint issue, and no metric occurs. The only choice use is the stated $\mathrm{AC}_\omega$, inherited through [F2]--[F7]; fixing two tangent vectors and differentiating their specified curves adds no choice. No biconditional is asserted. [F1, F2, F3, F4, F5, F6, F7, F8, F9, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
