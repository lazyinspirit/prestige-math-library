---
id: cor-ternary-isotropy-via-hilbert-symbol
kind: corollary
title: "Ternary isotropy via the Hilbert symbol"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-binary-quadratic-representation-via-hilbert-symbol]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11, Theorem 11.10"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.5"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $a,b,c\in Q_v^\times$. The ternary diagonal form

$$
aX^2+bY^2+cZ^2
$$

is isotropic over $Q_v$ if and only if

$$
(-ac,-bc)_v=1.
$$

## Facts & Assumptions

**Given:** A place $v$ of $\mathbb Q$ and nonzero elements $a,b,c\in Q_v$.

[L1] The binary form $aX^2+bY^2$ represents $t$ exactly when $(at,bt)_v=1$ ([[lem-binary-quadratic-representation-via-hilbert-symbol]]).

## Proof

**Proof technique:** direct.

1.1 If the binary form $aX^2+bY^2$ represents $-c$, then some $(u,v)$ satisfies $au^2+bv^2=-c$, and therefore $(u,v,1)$ is a nontrivial isotropic vector of $aX^2+bY^2+cZ^2$. Conversely, let $(x,y,z)$ be a nontrivial isotropic vector. If $z\ne0$, then dividing by $z^2$ shows that $aX^2+bY^2$ represents $-c$. If $z=0$, then $y\ne0$ and $r:=x/y$ satisfies $b=-ar^2$, so for any target $t$ the explicit choice $U:=(t+a)/(2a)$ and $V:=(t-a)/(2ar)$ gives $aU^2+bV^2=t$. In particular, the binary form represents $-c$. Thus ternary isotropy is equivalent to representation of $-c$ by $aX^2+bY^2$. [given, algebra]

2.1 Apply [L1] with $t=-c$. Then the representation condition of step 1.1 is exactly $(-ac,-bc)_v=1$. [L1, step 1.1, algebra] ∎
