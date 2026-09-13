---
id: thm-krein-milman-existence-of-extreme-points
kind: theorem
title: Krein–Milman existence of extreme points
status: draft
origin: pipeline
deps: ["lem-minimizer-face-of-a-continuous-affine-functional", "thm-locally-convex-continuous-dual-separates-points", "thm-compact-iff-fip", "thm-zorn", "def-axiom-of-choice", "thm-hahn-banach-dominated-extension"]
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
      locator: "§3.5, Theorem 3.46, Steps 1–4, pp. 149–151"
    - title: "Hanche-Olsen, Topological vector spaces"
      url: "https://hanche.folk.ntnu.no/notes/topvec/topvec-a4.pdf"
      locator: "Theorem 21 and proof, pp. 13–14"
proof_strategy: zorn
---

## Statement

**Assume the Axiom of Choice.**  Every nonempty compact convex subset $K$ of a
locally convex Hausdorff real or complex topological vector space has an
extreme point.

## Facts & Assumptions

**Given:** AC, a locally convex Hausdorff real or complex TVS $X$, and a nonempty compact convex subset $K\subseteq X$.

[F1] A continuous real affine functional on a nonempty compact convex set has a nonempty compact minimizer face, and faces of faces are faces ([[lem-minimizer-face-of-a-continuous-affine-functional]]).

[F2] Assuming HB, the continuous dual of a Hausdorff locally convex space separates distinct points by their real parts ([[thm-locally-convex-continuous-dual-separates-points]]).

[F3] Compactness is equivalent to the nonempty-intersection property for closed families having the finite-intersection property ([[thm-compact-iff-fip]]).

[F4] Under AC, a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[F5] AC says every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F6] AC supplies the Hahn–Banach dominated extension theorem ([[thm-hahn-banach-dominated-extension]]).

## Proof

**Proof technique:** Zorn's lemma on closed faces ordered by reverse inclusion.

1.1 Let $\mathcal P$ be the set of nonempty faces of $K$ that are closed in $K$, ordered by $F\preccurlyeq G$ when $F\supseteq G$.  It is a nonempty poset because $K\in\mathcal P$. [given]

2.1 Let $\mathcal C$ be a chain in $\mathcal P$.  If $\mathcal C=\varnothing$, then $K$ is an upper bound.  Otherwise every finite subfamily of $\mathcal C$ has intersection equal to its inclusion-smallest member and hence nonempty.  Its members are closed in compact $K$, so [F3] gives a nonempty intersection $H:=\bigcap_{F\in\mathcal C}F$, and $H$ is closed and convex. [F3, step 1.1]

3.1 If $x,y\in K$, $0<t<1$, and $(1-t)x+ty\in H$, then this combination lies in every $F\in\mathcal C$; since each $F$ is a face, $x,y$ lie in every $F$ and therefore in $H$.  Thus $H$ is a face, hence belongs to $\mathcal P$, and $F\supseteq H$ for every $F\in\mathcal C$, so $H$ is an upper bound in the reverse-inclusion order. [step 1.1, step 2.1]

4.1 By [F4], using AC as declared in [F5], $\mathcal P$ has a maximal element $M$; equivalently, $M$ is an inclusion-minimal nonempty closed face of $K$. [F4, F5, step 1.1, step 3.1]

5.1 Suppose $p,q\in M$ are distinct.  AC supplies HB by [F6], so [F2] gives $f\in X'$ with $u(p):=\operatorname{Re}f(p)\ne\operatorname{Re}f(q)=:u(q)$.  The restriction $u|_M$ is continuous, real-valued, and affine. [F2, F6, step 4.1]

6.1 By [F1], the minimizer set $N$ of $u|_M$ is a nonempty compact face of $M$, hence a face of $K$.  It is closed in $M$ and $M$ is closed in $K$, so it is closed in $K$ and lies in $\mathcal P$.  Since $u(p)\ne u(q)$, at least one of $p,q$ is not a minimizer, so $N\subsetneq M$, contradicting the inclusion-minimality of $M$. [F1, step 4.1, step 5.1]

7.1 Hence $M$ is a singleton, say $M=\{x\}$.  Since $M$ is a face of $K$, the singleton characterization in the face definition makes $x$ an extreme point of $K$. [step 4.1, step 6.1]

8.1 The empty-chain case in step 2.1 and the nonempty-chain construction in steps 2.1–3.1 verify every chain hypothesis of Zorn; steps 4.1–7.1 then produce the required extreme point. [step 2.1, step 3.1, step 4.1, step 7.1] ∎
