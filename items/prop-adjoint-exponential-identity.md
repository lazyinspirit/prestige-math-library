---
id: prop-adjoint-exponential-identity
kind: proposition
title: Adjoint exponential identity
status: draft
origin: pipeline
deps: ["def-countable-choice", "thm-the-differential-of-adjoint-is-ad", "prop-adjoint-is-a-smooth-lie-group-representation", "thm-one-parameter-subgroups-are-exactly-exponentials", "prop-exponential-scales-one-parameter-subgroups", "lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Proposition 1.91, formula (1.92), and complete proof, printed pages 80–81
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Lemma 3.15(2) and complete proof, printed page 33
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
with Lie algebra $\mathfrak g$. For every $X\in\mathfrak g$,

$$\operatorname{Ad}_{\exp_GX}=e^{\operatorname{ad}_X}.$$

Here, for $B\in\operatorname{End}(\mathfrak g)$, the **linear-ODE
exponential** $e^{tB}$ denotes the unique solution $E_B(t)$ of

$$E_B'(t)=B\circ E_B(t),\qquad E_B(0)=I,$$

and $e^B=E_B(1)$. The countable-choice assumption is inherited exactly from
the supplied exponential and $d\operatorname{Ad}=\operatorname{ad}$ results.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$ with
Lie algebra $\mathfrak g$, and $X\in\mathfrak g$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] The adjoint map is a smooth representation, so
$\operatorname{Ad}_{gh}=\operatorname{Ad}_g\operatorname{Ad}_h$ and
$\operatorname{Ad}_e=I$.
[[prop-adjoint-is-a-smooth-lie-group-representation]].

[F3] The unique one-parameter subgroup with initial velocity $X$ is the curve
$t\mapsto\exp_G(tX)$.
[[thm-one-parameter-subgroups-are-exactly-exponentials]].
[[prop-exponential-scales-one-parameter-subgroups]].

[F4] Under $T_I\operatorname{GL}(\mathfrak g)=\operatorname{End}(\mathfrak g)$,
$d(\operatorname{Ad})_eX=\operatorname{ad}_X$.
[[thm-the-differential-of-adjoint-is-ad]].

[F5] A linear matrix initial-value problem on a compact interval has a unique
solution on the whole interval.
[[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]].

## Proof

**Proof technique:** direct.

1.1 Put $A(t)=\operatorname{Ad}_{\exp_G(tX)}$. By [F2]--[F3], $A$ is smooth, $A(0)=I$, and $A(t+s)=A(t)A(s)=A(s)A(t)$. The chain rule and [F4] give $A'(0)=d(\operatorname{Ad})_eX=\operatorname{ad}_X$. [F2, F3, F4]

2.1 Fix $t$ and differentiate $A(t+s)=A(s)A(t)$ with respect to $s$ at zero. Using step 1.1 gives $A'(t)=\operatorname{ad}_X\circ A(t)$ and $A(0)=I$. [step 1.1, algebra]

3.1 In one fixed basis of $\mathfrak g$, [F5] gives a unique solution of $E'(t)=\operatorname{ad}_X E(t)$, $E(0)=I$, on every compact interval containing zero. Solutions on overlapping intervals agree by uniqueness, so they define the global linear-ODE exponential $E(t)=e^{t\operatorname{ad}_X}$ without any arbitrary selection. Step 2.1 and uniqueness give $A(t)=E(t)$ on every such interval. Evaluating at $t=1$ yields $\operatorname{Ad}_{\exp_GX}=e^{\operatorname{ad}_X}$. [F5, step 2.1]

4.1 A Lie group is nonempty and boundaryless. If $\dim G=0$, both sides are the unique endomorphism of the zero space; in dimension one, $\operatorname{ad}_X=0$ and the ODE gives both sides equal to $I$. Degenerate adjoint endomorphisms are allowed. The compact-interval solutions glue globally, so there is no endpoint issue, and no metric occurs. The only choice use is the stated $\mathrm{AC}_\omega$ inherited through [F3]--[F4]; one finite basis and uniquely determined ODE solutions add no choice. No biconditional is asserted. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎
