---
id: thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law
kind: theorem
title: "Local connection forms glue exactly when they obey the transformation law"
status: draft
origin: pipeline
deps: ["thm-connection-one-form-transformation-law","def-connection-on-a-smooth-vector-bundle"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

Let a smooth vector bundle be covered by supplied frames $e_\alpha$ on $U_\alpha$, with $e_\beta=e_\alpha A_{\alpha\beta}$ on overlaps. Matrices of smooth one-forms $\omega_\alpha$ are the local matrices of a unique connection if and only if
$$\omega_\beta=A_{\alpha\beta}^{-1}\omega_\alpha A_{\alpha\beta}+A_{\alpha\beta}^{-1}dA_{\alpha\beta}$$
on every overlap. No local finiteness or choice assumption is required for this gluing statement.

## Facts & Assumptions

**Given:** The specified smooth bundle atlas and matrices of smooth one-forms.

[F1] Matrices of an intrinsic connection satisfy the stated rule ([[thm-connection-one-form-transformation-law]]).

[F2] An intrinsic connection is a real-linear smooth Hom-section-valued map satisfying the one-form Leibniz law ([[def-connection-on-a-smooth-vector-bundle]]).

## Proof

1.1 Necessity is the transformation formula for each pair of frames. For sufficiency, write $s=e_\alpha u_\alpha$ on $U_\alpha$ and define there $\eta_s=e_\alpha(du_\alpha+\omega_\alpha u_\alpha)$. This is a smooth Hom section since its local entries are sums and products of smooth functions and their derivatives. [F1, F2, given, construct]

2.1 On an overlap put $A=A_{\alpha\beta}$, so $u_\alpha=Au_\beta$. The ordinary product rule and the assumed matrix identity give $du_\alpha+\omega_\alpha u_\alpha=Adu_\beta+(dA+\omega_\alpha A)u_\beta=A(du_\beta+\omega_\beta u_\beta)$. Multiplying by $e_\alpha$ shows the two definitions agree. They therefore assign a unique global value at every point; smoothness holds because near each point it is one of the displayed smooth local expressions. [given, step 1.1]

3.1 The local rule is real-linear, and $d(fu)+\omega(fu)=df\,u+f(du+\omega u)$ proves its Leibniz identity. Consequently $s\mapsto\eta_s$ is a connection. Any connection with the prescribed matrices must have these local values, by its Leibniz rule applied to each frame expansion, proving uniqueness. Empty overlaps require no matching; an empty base has the unique zero connection. A single chart needs no gluing, while rank zero and base dimension zero make the expression zero. The agreed values in step 2.1 specify the global object uniquely without choosing a chart for every point. [F2, step 1.1, step 2.1] ∎
