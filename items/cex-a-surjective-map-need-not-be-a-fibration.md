---
id: "cex-a-surjective-map-need-not-be-a-fibration"
kind: "counterexample"
title: "A surjective map need not be a fibration"
deps: ["def-hurewicz-and-serre-fibrations", "def-continuous-map-top", "thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle", "thm-sine-and-cosine-subtraction-formulas", "cor-trigonometric-parity-and-pythagorean-identity", "thm-sine-cosine-zero-sets-and-fundamental-period", "thm-quarter-turn-values-and-shift-formulas", "cor-heine-borel-in-the-product-topology", "thm-closed-subspace-of-a-compact-space-is-compact", "thm-compact-subset-of-a-hausdorff-space-is-closed"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Every continuous surjection is a Serre fibration (and hence, more strongly, every continuous surjection is a Hurewicz fibration).

## Facts & Assumptions

[F1] A Serre or Hurewicz fibration lifts every path with prescribed initial point, since its test class contains $D^0$. [[def-hurewicz-and-serre-fibrations]]

[F2] Continuity means preimages of open sets are open. [[def-continuous-map-top]]

[F3] The map $[t]\mapsto(\cos2\pi t,\sin2\pi t)$ is a homeomorphism from $\mathbb R/\mathbb Z$ onto the geometric circle. [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]

[F4] The subtraction formulas express the sine and cosine of a difference. [[thm-sine-and-cosine-subtraction-formulas]]

[F5] The sine zero set is $\pi\mathbb Z$, and sine and cosine are $2\pi$-periodic. [[thm-sine-cosine-zero-sets-and-fundamental-period]]

[F6] The closed bounded interval is compact in its ordinary topology. [[cor-heine-borel-in-the-product-topology]]

[F7] Closed subspaces of compact spaces are compact. [[thm-closed-subspace-of-a-compact-space-is-compact]]

[F8] Compact subsets of Hausdorff spaces are closed. [[thm-compact-subset-of-a-hausdorff-space-is-closed]]

[F9] The Pythagorean identity gives $\cos^2 u+\sin^2 u=1$ for every real $u$. [[cor-trigonometric-parity-and-pythagorean-identity]]

[F10] The shift identity is $\cos(u+\pi)=-\cos u$, with $\cos0=1$. [[thm-quarter-turn-values-and-shift-formulas]]

## Counterexample

**Given:** $q:[0,1]\to S^1$, $q(t)=e^{2\pi it}$, and the path $\beta(s)=e^{-\pi is}$ beginning at $1=q(0)$.

1.1 Let $Q:\mathbb R\to S^1$ be $Q(t)=e^{2\pi it}$, so $q=Q|_{[0,1]}$. We first verify locally the equality-of-values clause in F3 on the full real-line map Q. If $Q(x)=Q(y)$, F4 and F9 give $\sin(2\pi(x-y))=0$ and $\cos(2\pi(x-y))=1$. By F5, $2\pi(x-y)=m\pi$. F10 gives $\cos((m+1)\pi)=-\cos(m\pi)$ and $\cos0=1$, so integer induction in both directions gives $\cos(m\pi)=(-1)^m$. Since the difference cosine is one, $m$ is even and $x-y\in\mathbb Z$. Conversely F5's $2\pi$-periodicity gives $Q(x)=Q(y)$ whenever $x-y\in\mathbb Z$. Thus this clause no longer depends on the affected published inference. F3 makes Q continuous and onto; every real coset has a representative in $[0,1]$, so q is continuous and onto. It is also a quotient map: a closed subset $K$ of $[0,1]$ is compact by F6 and F7. Its image is compact since pulling an open cover back by $q$ gives an open cover of $K$, whose finite subcover maps to a finite cover of $q(K)$. The geometric circle is Hausdorff (disjoint sufficiently small Euclidean balls separate distinct points), so F8 makes $q(K)$ closed. Thus $q$ is closed. If $q^{-1}(A)$ is closed, surjectivity gives $A=q(q^{-1}(A))$ closed; with continuity this is the quotient criterion. For the refuted statement only continuity and surjectivity are needed. The path $\beta(s)=(\cos(-\pi s),\sin(-\pi s))=Q(-s/2)$ is continuous. [F2, F3, F4, F5, F6, F7, F8, F9, F10]

2.1 Suppose a lift $\ell:I\to[0,1]$ has $\ell(0)=0$. For $0<s\le1$, the equation $Q(\ell(s))=Q(-s/2)=\beta(s)$ means $\ell(s)+s/2$ is an integer by the locally verified clause in step 1.1. Because $0\le\ell(s)\le1$ and $0<s/2\le1/2$, that integer must be $1$, so $\ell(s)=1-s/2$. In particular $\ell(s)\ge1/2$ for every $s>0$. [step 1.1, assume-hyp]

3.1 The set $[0,1/4)$ is a relatively open neighbourhood of $\ell(0)=0$. By step 2.1 its inverse image is exactly $\{0\}$, which is not open in $I$ since every relative neighbourhood of zero contains positive numbers. This contradicts F2, so no such lift is continuous. F1 therefore excludes both Serre and Hurewicz fibrations. The failure occurs at the initial endpoint, despite the unique possible positive-time lift and the value $\ell(1)=1/2$. All spaces are nonempty and all paths were explicit; no AC is involved. [F1, F2, step 2.1] ∎
