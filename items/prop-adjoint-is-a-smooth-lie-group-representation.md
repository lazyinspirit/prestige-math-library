---
id: prop-adjoint-is-a-smooth-lie-group-representation
kind: proposition
title: Adjoint is a smooth Lie-group representation
status: draft
origin: pipeline
deps: ["def-conjugation-and-the-adjoint-representation-of-a-lie-group", "def-lie-group", "def-finite-dimensional-representation-of-a-group-over-a-field", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Definition preceding formula (1.88), Proposition 1.89, and complete proof, printed page 79
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Formula (3.4) and preceding paragraph, printed page 33
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $G$ be a finite-dimensional real Lie group with Lie algebra
$\mathfrak g$. Its adjoint map is a group homomorphism

$$\operatorname{Ad}:G\longrightarrow\operatorname{GL}(\mathfrak g),$$

and it is smooth for the standard smooth structure on
$\operatorname{GL}(\mathfrak g)$. In particular,

$$\operatorname{Ad}_{gh}=\operatorname{Ad}_g\circ\operatorname{Ad}_h,\qquad \operatorname{Ad}_e=\operatorname{id}_{\mathfrak g}.$$

Thus $\operatorname{Ad}$ is a smooth finite-dimensional real representation
of $G$ on $\mathfrak g$. No choice principle is required.

## Facts & Assumptions

**Given:** A finite-dimensional real Lie group $G$ with identity $e$ and Lie
algebra $\mathfrak g=T_eG$.

[F1] Conjugation is $C_g(h)=ghg^{-1}$, and
$\operatorname{Ad}_g=d(C_g)_e$ is an invertible linear endomorphism of
$\mathfrak g$; the target $\operatorname{GL}(\mathfrak g)$ has its standard
basis-independent smooth structure.
[[def-conjugation-and-the-adjoint-representation-of-a-lie-group]].

[F2] Multiplication and inversion in $G$ are smooth. [[def-lie-group]].

[F3] Differentials of smooth maps satisfy the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

[F4] A finite-dimensional representation is a group homomorphism into the
group of invertible linear maps of its representation space.
[[def-finite-dimensional-representation-of-a-group-over-a-field]].

## Proof

**Proof technique:** direct.

1.1 For $g,h,x\in G$, associativity and $(gh)^{-1}=h^{-1}g^{-1}$ give $C_{gh}(x)=(gh)x(gh)^{-1}=g(hxh^{-1})g^{-1}=(C_g\circ C_h)(x)$, while $C_e=\operatorname{id}_G$. [F1, algebra]

1.2 It remains to verify smoothness, not merely pointwise differentiability. Define $\Phi:G\times G\to G$ by $\Phi(g,x)=gxg^{-1}$; [F2] makes $\Phi$ smooth. Fix a finite basis of $\mathfrak g$ and a chart at $e$ whose coordinate differential carries it to the standard basis. Around an arbitrary $g_0$, take any chart in the first variable and use the fixed identity chart in the second and target variables. Since $\Phi(g,e)=e$, the matrix entries of $\operatorname{Ad}_g=d_x\Phi_{(g,e)}$ in that basis are the first partial derivatives with respect to the second-variable coordinates, evaluated at the identity coordinate. These entries are smooth functions of the first-variable coordinates because the coordinate representative of $\Phi$ is smooth. By the standard target structure in [F1], $g\mapsto\operatorname{Ad}_g$ is smooth near $g_0$, and $g_0$ was arbitrary. [F1, F2]

2.1 Differentiate step 1.1 at $e$. Since $C_h(e)=e$, the chain rule [F3] gives $\operatorname{Ad}_{gh}=d(C_g)_e\circ d(C_h)_e=\operatorname{Ad}_g\circ\operatorname{Ad}_h$ and $\operatorname{Ad}_e=\operatorname{id}_{\mathfrak g}$. Hence $\operatorname{Ad}$ is a group homomorphism. [F1, F3, step 1.1]

3.1 Step 2.1 supplies the group-homomorphism law and step 1.2 supplies smoothness, so [F4] identifies $\operatorname{Ad}$ as the claimed smooth representation. [F4, step 2.1, step 1.2]

4.1 A Lie group is nonempty and boundaryless. If $\dim G=0$, then $\mathfrak g=0$ and the target is the one-point group, so the map is constant and smooth; dimension one uses the same coordinate argument. No metric, nondegeneracy, interval, or endpoint occurs. The displayed consequences of the homomorphism assertion in the Statement are established in step 2.1. Fixing one finite basis and finitely many charts in a local smoothness test makes no choice from a family, so the proof is choice-free. [F1, F2, F3, F4, step 1.1, step 2.1, step 1.2, step 3.1] ∎
