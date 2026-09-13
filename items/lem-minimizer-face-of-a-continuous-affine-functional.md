---
id: lem-minimizer-face-of-a-continuous-affine-functional
kind: lemma
title: Minimizer face of a continuous affine functional
status: draft
origin: pipeline
deps: ["def-extreme-point-and-face", "thm-compactness-under-continuous-maps", "thm-closed-subspace-of-a-compact-space-is-compact"]
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
      locator: "§3.5, proof of Theorem 3.46, Step 2, pp. 149–150"
    - title: "Hanche-Olsen, Topological vector spaces"
      url: "https://hanche.folk.ntnu.no/notes/topvec/topvec-a4.pdf"
      locator: "p. 13, exposed-face example and paragraph before Theorem 21"
proof_strategy: direct
---

## Statement

Let $K$ be a nonempty compact convex subset of a real or complex topological
vector space, and let $a:K\to\mathbb R$ be continuous and affine for real
convex combinations.  Then $a$ attains its minimum $m$, and

$$F=\{x\in K:a(x)=m\}$$

is a nonempty compact face of $K$.  Moreover, if $G$ is a face of $F$, then
$G$ is a face of $K$.

## Facts & Assumptions

**Given:** A nonempty compact convex set $K$ and a continuous real-valued affine map $a$ on $K$.

[F1] A continuous real-valued function on a nonempty compact space attains its minimum ([[thm-compactness-under-continuous-maps]]).

[F2] A closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

[F3] A face is a nonempty convex subset satisfying the strict endpoint condition ([[def-extreme-point-and-face]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], some $x_0\in K$ satisfies $a(x_0)=m:=\min_{x\in K}a(x)$, so $F$ is nonempty.  Since $F=a^{-1}(\{m\})$ and $a$ is continuous, $F$ is closed in $K$; hence it is compact by [F2]. [F1, F2, given]

2.1 If $x,y\in F$ and $0\leq t\leq1$, affinity gives $a((1-t)x+ty)=(1-t)m+tm=m$, so convexity of $K$ places the combination in $F$; thus $F$ is convex. [step 1.1, given]

2.2 Suppose $x,y\in K$, $0<t<1$, and $(1-t)x+ty\in F$.  Minimality gives $a(x),a(y)\geq m$, while affinity gives $(1-t)a(x)+ta(y)=m$; the two positive coefficients force $a(x)=a(y)=m$, so $x,y\in F$.  Therefore $F$ is a face by [F3]. [F3, step 1.1, given]

3.1 Let $G$ be a face of $F$, and suppose $x,y\in K$, $0<t<1$, and $(1-t)x+ty\in G$.  Since $G\subseteq F$ and $F$ is a face of $K$, step 2.2 gives $x,y\in F$; the face condition for $G$ inside $F$ then gives $x,y\in G$.  Since $G$ is already nonempty and convex, [F3] makes it a face of $K$. [F3, step 2.2]

4.1 Steps 1.1–2.2 prove that the minimum is attained and its level set is a nonempty compact face; step 3.1 proves that faces of faces are faces. [step 1.1, step 2.1, step 2.2, step 3.1] ∎
