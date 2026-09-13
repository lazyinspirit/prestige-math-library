---
id: thm-krein-milman-closed-convex-hull-form
kind: theorem
title: Krein–Milman closed-convex-hull form
status: draft
origin: pipeline
deps: ["thm-krein-milman-existence-of-extreme-points", "thm-locally-convex-strict-separation", "lem-minimizer-face-of-a-continuous-affine-functional", "thm-hahn-banach-dominated-extension", "thm-compact-subset-of-a-hausdorff-space-is-closed", "lem-locally-convex-closures-and-finite-compact-convex-hulls"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.5, Theorem 3.46, Step 5, pp. 150–151"
    - title: "Hanche-Olsen, Topological vector spaces"
      url: "https://hanche.folk.ntnu.no/notes/topvec/topvec-a4.pdf"
      locator: "Theorem 21 and proof, p. 14"
proof_strategy: contradiction
---

## Statement

**Assume the Axiom of Choice.**  If $K$ is a compact convex subset of a
locally convex Hausdorff real or complex topological vector space, then

$$K=\overline{\operatorname{co}}(\operatorname{ext}K).$$

The empty set is allowed, with
$\overline{\operatorname{co}}(\varnothing)=\varnothing$.

## Facts & Assumptions

**Given:** AC, a locally convex Hausdorff real or complex TVS $X$, and a compact convex subset $K\subseteq X$.

[F1] Under AC, every nonempty compact convex subset of $X$ has an extreme point ([[thm-krein-milman-existence-of-extreme-points]]).

[F2] Assuming HB, a nonempty compact convex set and a disjoint nonempty closed convex set are strictly separated by the real part of a continuous linear functional ([[thm-locally-convex-strict-separation]]).

[F3] A continuous real affine functional has a compact minimizer face, and faces of faces are faces ([[lem-minimizer-face-of-a-continuous-affine-functional]]).

[F4] AC supplies Hahn–Banach dominated extension ([[thm-hahn-banach-dominated-extension]]).

[F5] A compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 3).

[F6] The closure of a convex subset of a real or complex TVS is convex ([[lem-locally-convex-closures-and-finite-compact-convex-hulls]]).

## Proof

**Proof technique:** contradiction by strict separation.

1.1 If $K=\varnothing$, then $\operatorname{ext}K=\varnothing$ and both sides are empty by the stated convention.  Hence suppose $K\ne\varnothing$ and put $E=\operatorname{ext}K$ and $C=\overline{\operatorname{co}}(E)$.  By [F1], $E$ and therefore $C$ are nonempty. [F1, given]

2.1 The set $K$ is closed by [F5] and convex by hypothesis, and it contains $E$; therefore it contains $\operatorname{co}(E)$ and its closure $C$.  The set $C$ is closed by definition and convex by [F6]. [F5, F6, step 1.1, given]

3.1 Suppose for contradiction that $x\in K\setminus C$.  Apply [F2] to the compact convex singleton $\{x\}$ and the nonempty closed convex set $C$, using HB supplied from AC by [F4].  After naming $u=\operatorname{Re}f$, the resulting inequalities give $u(x)<\inf_{c\in C}u(c)$. [F2, F4, step 2.1, assume-contra]

4.1 By [F3], the minimizer set $M=\{y\in K:u(y)=\min_Ku\}$ is a nonempty compact face of $K$.  By [F1], $M$ has an extreme point $e$.  Then $\{e\}$ is a face of $M$, so face transitivity in [F3] makes $\{e\}$ a face of $K$; hence $e\in E\subseteq C$. [F1, F3, step 1.1, step 3.1]

5.1 Since $e$ minimizes $u$ on $K$ and $x\in K$, one has $u(e)\leq u(x)$; step 3.1 gives $u(x)<\inf_Cu$, whereas $e\in C$ gives $u(e)\geq\inf_Cu$, a contradiction.  Thus no $x\in K\setminus C$ exists, so $K\subseteq C$. [step 3.1, step 4.1, discharge-contradiction]

6.1 Step 2.1 gives $C\subseteq K$ and step 5.1 gives the reverse inclusion; together with the empty case in step 1.1 this proves the asserted equality in every case. [step 1.1, step 2.1, step 5.1, discharge-contradiction] ∎
