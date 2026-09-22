---
id: ex-cotangent-reduction-for-a-principal-bundle-at-zero
kind: example
title: Cotangent reduction for a principal bundle at zero
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, thm-marsden-weinstein-meyer-symplectic-reduction, thm-free-proper-action-quotient-manifold, def-tautological-one-form-on-a-cotangent-bundle, prop-cotangent-lifts-are-symplectomorphisms, def-countable-choice, lem-tautological-cotangent-moment-map-is-equivariant, prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra, cor-local-normal-form-for-submersions]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Example 8.9, printed page 103
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.4, printed page 150
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. Let a Lie group $G$ act smoothly, freely and properly on a manifold $Q$, and
let it act on $T^*Q$ by cotangent lifts, with moment map
$\langle\mu(q,p),\xi\rangle=-p(\xi_Q(q))$. If the lifted action is again free
and proper (in particular whenever $G$ is compact), then zero reduction of
$T^*Q$ is canonically symplectomorphic to the cotangent bundle of the quotient:

$$(T^*Q)//G\;\cong\;T^*(Q/G).$$

The zero level consists exactly of the covectors that annihilate the orbit
tangents, and the identification is the tautological one: a covector on the
zero level is the pullback of a unique covector on $Q/G$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a smooth free proper action on $Q$, and a free proper cotangent-lifted action. Write $B=Q/G$, $b:Q\to B$, $\tau_Q:T^*Q\to Q$, $\tau_B:T^*B\to B$, $Z=\mu^{-1}(0)$, and $\iota:Z\hookrightarrow T^*Q$.

[A1] Countable choice is [[def-countable-choice]] and is inherited through the cotangent, infinitesimal-action and reduction interfaces below.

[F1] The lifted action is smooth and symplectic, its components are $\mu^\xi(q,p)=-p(\xi_Q(q))$, and these satisfy the component moment equations. Equivariance holds by the companion lemma ([[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]], [[lem-tautological-cotangent-moment-map-is-equivariant]]).

[F2] A smooth free proper action has a smooth quotient and surjective submersion of dimension difference $\dim G$ ([[thm-free-proper-action-quotient-manifold]]). A submersion has local projection coordinates, hence local smooth sections ([[cor-local-normal-form-for-submersions]]).

[F3] For a cotangent bundle with projection $\tau$, the tautological form is $\lambda_{(q,p)}(v)=p(d\tau(v))$ and the canonical symplectic form is $-d\lambda$; cotangent lifts preserve these forms ([[def-tautological-one-form-on-a-cotangent-bundle]], [[prop-cotangent-lifts-are-symplectomorphisms]]).

[F4] At a regular value of an equivariant moment map, a free proper action of the coadjoint stabilizer on the level admits a symplectic quotient whose form pulls back to the restriction of the ambient form ([[thm-marsden-weinstein-meyer-symplectic-reduction]]).

[F5] The map $j_q:\mathfrak g\to T_qQ$, $\xi\mapsto\xi_Q(q)$ has kernel the stabilizer Lie algebra and image the orbit tangent ([[prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Freeness makes the stabilizer trivial, so $j_q$ is injective by [F5]. Since $b$ is constant along orbits, $\operatorname{im}j_q\subseteq\ker db_q$. Both spaces have dimension $\dim G$ by injectivity and the quotient dimension/submersion assertion in [F2], so they are equal. By [F1], $\mu(q,p)=0$ exactly when $p$ annihilates $\operatorname{im}j_q=\ker db_q$. [F1, F2, F5, given]

2.1 On vertical fibre variations $\delta p\in T_q^*Q$, the derivative of $\mu$ is $(d\mu)_{(q,p)}(0,\delta p)=-\delta p\circ j_q$. This is surjective onto $\mathfrak g^*$: a linear functional on $j_q(\mathfrak g)$ extends to $T_qQ$ by completing a finite basis. Thus $\mu$ is a submersion everywhere, and zero is a regular value. Equivariance in [F1] makes $Z$ invariant, since every linear coadjoint map fixes zero. The assumed free proper lifted action restricts to a free proper action on $Z$: $Z$ is closed as the inverse image of zero, and the action-map preimage of a compact subset of $Z\times Z$ is the same compact preimage as in $T^*Q\times T^*Q$. Consequently [F4] supplies $Z/G$ and its reduced form; its quotient map $\pi:Z\to Z/G$ is a surjective submersion by [F2]. [F1, F2, F4, step 1.1, algebra]

2.2 At $(q,p)\in Z$, surjectivity of $db_q$ and the annihilator description in step 1.1 give a unique $\beta\in T_{b(q)}^*B$ with $p=(db_q)^*\beta$: define $\beta(v)=p(\widetilde v)$ for any lift, independent of the lift because their difference lies in $\ker db_q$. Define $\Psi(q,p)=(b(q),\beta)$. It is smooth: in submersion coordinates $b(x,y)=x$, covectors in $Z$ have precisely the form $(p_x,0)$, and $\Psi(x,y,p_x,0)=(x,p_x)$. Since $b\circ a_g=b$, the cotangent lift transports $(db_q)^*\beta$ to $(db_{gq})^*\beta$. Thus $\Psi$ is invariant, onto, and its fibres are exactly the $G$-orbits: representatives of the same point of $B$ differ by the action, and the pullback covector at each representative is unique. [F1, F2, step 1.1, algebra]

3.1 The induced map $\overline\Psi:Z/G\to T^*B$ is therefore bijective. It is smooth, since local sections of $\pi$ express it locally as $\Psi$ composed with a smooth section. To see its inverse is smooth, let $s:U\to Q$ be a local section of $b$ supplied by [F2]. On $T^*U$, the inverse is $(x,\beta)\mapsto\pi(s(x),(db_{s(x)})^*\beta)$, a smooth expression which lands in $Z$ by step 1.1. Smoothness into $Z$ also follows from the submersion covector coordinates of step 2.2. These expressions cover the target and agree by uniqueness of the orbit, proving that $\overline\Psi$ is a diffeomorphism. [F2, step 2.1, step 2.2, algebra]

4.1 For $z=(q,p)\in Z$ and $v\in T_zZ$, put $\Psi(z)=(b(q),\beta)$. The correctly typed projection identity is $\tau_B\circ\Psi=b\circ\tau_Q\circ\iota$. Therefore $$(\Psi^*\lambda_B)_z(v)=\beta\bigl(db_q\,d(\tau_Q\circ\iota)_zv\bigr)=p\bigl(d(\tau_Q\circ\iota)_zv\bigr)=(\iota^*\lambda_Q)_z(v).$$ Here $p=(db_q)^*\beta$ by step 2.2, and the tangent vector is a tangent to the level, the domain of $\Psi$. Applying $-d$ gives $\Psi^*\omega_B=\iota^*\omega_Q$. [F3, step 2.2, step 3.1, algebra]

5.1 Since $\Psi=\overline\Psi\circ\pi$, steps 2.1 and 4.1 give $\pi^*(\overline\Psi^*\omega_B)=\pi^*\omega^{\mathrm{red}}$. Pullback by a surjective submersion is injective on forms: at each base point, choose a point above it and lift every finite tuple of tangent vectors by the surjective differential to evaluate the form. Hence $\overline\Psi^*\omega_B=\omega^{\mathrm{red}}$, proving the canonical symplectomorphism. If $Q$ is empty both spaces are empty. If $G$ is trivial the construction is the identity; if $\dim G=0$ the derivative surjectivity onto its zero-dimensional dual is vacuous and the same descent works. Zero covectors cause no exception. No connection or choice of horizontal distribution enters the map, and the local sections used to prove smoothness do not enter its definition. [A1, step 2.1, step 3.1, step 4.1, algebra] ∎
