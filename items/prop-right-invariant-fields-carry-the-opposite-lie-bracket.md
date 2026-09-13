---
id: prop-right-invariant-fields-carry-the-opposite-lie-bracket
kind: proposition
title: Right-invariant fields carry the opposite Lie bracket
status: published
origin: pipeline
deps: ["def-countable-choice", "def-lie-group", "def-lie-bracket-on-the-tangent-space-of-a-lie-group", "def-left-and-right-invariant-vector-fields", "thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity", "cor-diffeomorphism-pushforward-preserves-lie-brackets", "thm-chain-rule-for-differentials-of-smooth-maps", "thm-canonical-tangent-and-cotangent-splittings-for-products", "def-differential-of-a-smooth-map", "lem-the-differential-sends-derivations-to-derivations-and-is-linear", "def-lie-bracket-of-smooth-vector-fields"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, printed page 69, for the left-invariant sign convention
    - title: Robert L. Bryant, An Introduction to Lie Groups and Symplectic Geometry
      url: https://math.duke.edu/~bryant/ParkCityLectures.pdf
      locator: Lecture 3, Group Actions and Vector Fields, Proposition 1 and proof, printed pages 44–45
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For $X,Y\in\mathfrak g=T_eG$, let $X^R,Y^R$
be their ordinary right-invariant smooth extensions, and let $[X,Y]_G$ be the
tangent bracket defined through left-invariant fields. Then

$$[X^R,Y^R]=-[X,Y]_G^R.$$

Thus evaluation identifies ordinary right-invariant fields with the opposite
Lie algebra $\mathfrak g^{\mathrm{op}}$, not with the left-invariant bracket.
The countable-choice assumption is used exactly through the supplied
invariant-extension and tangent-bracket results.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie group $G$ with inversion
$\operatorname{inv}(g)=g^{-1}$, and $X,Y\in\mathfrak g=T_eG$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] Multiplication and inversion are smooth, and inversion is involutive.
[[def-lie-group]].

[F3] Left- and ordinary right-invariant fields use $L_g(h)=gh$ and
$R_g(h)=hg$. [[def-left-and-right-invariant-vector-fields]].

[F4] Left and right invariant extensions exist uniquely and satisfy
$Z^L_g=d(L_g)_eZ$ and $Z^R_g=d(R_g)_eZ$.
[[thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity]].

[F5] The tangent bracket satisfies $[X^L,Y^L]=[X,Y]_G^L$.
[[def-lie-bracket-on-the-tangent-space-of-a-lie-group]].

[F6] Differentials obey the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

[F7] Tangent spaces of products split canonically as direct sums.
[[thm-canonical-tangent-and-cotangent-splittings-for-products]].

[F8] The differential is defined by pullback of germs, and is a linear map.
[[def-differential-of-a-smooth-map]],
[[lem-the-differential-sends-derivations-to-derivations-and-is-linear]].

[F9] Diffeomorphism pushforward preserves vector-field brackets.
[[cor-diffeomorphism-pushforward-preserves-lie-brackets]].

[F10] The field bracket is the commutator
$[U,V]f=U(Vf)-V(Uf)$. [[def-lie-bracket-of-smooth-vector-fields]].

## Proof

**Proof technique:** direct.

1.1 Let $m:G\times G\to G$ be multiplication and let $j_1(g)=(g,e)$, $j_2(g)=(e,g)$. Under [F7], $d(j_1)_e(A)=(A,0)$ and $d(j_2)_e(B)=(0,B)$. Since $m\circ j_1=m\circ j_2=\operatorname{id}_G$, the chain rule [F6] and linearity [F8] give $dm_{(e,e)}(A,B)=A+B$. [F2, F6, F7, F8, algebra]

2.1 The map $g\mapsto m(g,\operatorname{inv}(g))$ is constant at $e$. By [F8], its differential annihilates every tangent vector because derivations annihilate constant germs. Applying [F6] and step 1.1 gives $0=dm_{(e,e)}(Z,d(\operatorname{inv})_eZ)=Z+d(\operatorname{inv})_eZ$. Hence $d(\operatorname{inv})_e=-\operatorname{id}_{\mathfrak g}$. [F2, F6, F8, step 1.1, algebra]

3.1 For $h\in G$, the identity $\operatorname{inv}\circ L_h=R_{h^{-1}}\circ\operatorname{inv}$ and [F6] give $d(\operatorname{inv})_h\,d(L_h)_eZ=d(R_{h^{-1}})_e\,d(\operatorname{inv})_eZ=-d(R_{h^{-1}})_eZ$. By [F4], as $h$ varies this says $\operatorname{inv}_*(Z^L)=(-Z)^R=-Z^R$. [F3, F4, F6, step 2.1]

4.1 Inversion is a diffeomorphism by [F2]. Apply [F9], step 3.1, and [F5]: $$[X^R,Y^R]=[-X^R,-Y^R]=[\operatorname{inv}_*X^L,\operatorname{inv}_*Y^L]=\operatorname{inv}_*[X^L,Y^L]=\operatorname{inv}_*([X,Y]_G^L)=-[X,Y]_G^R.$$ The first equality uses the bilinearity visible directly in the commutator formula [F10]. [F5, F9, F10, step 3.1, algebra]

5.1 A Lie group is nonempty. If $\dim G=0$, all fields and brackets vanish; in dimension one the tangent bracket vanishes by alternation, so the displayed identity again reads zero equals zero. No metric or nondegeneracy condition occurs, and the group is boundaryless by convention. The stated $\mathrm{AC}_\omega$ is inherited through [F3], [F4], and [F5]; the product differential, inversion, and bracket calculation are canonical and add no choice. The proposition is a one-way sign identity, not a biconditional. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 1.1, step 2.1, step 3.1, step 4.1] ∎
