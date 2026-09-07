---
id: "prop-deformation-lemma-for-a-critical-point-free-slab"
kind: "proposition"
title: "Deformation lemma for a critical point free slab"
deps: ["lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
    - url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      title: "Audin–Damian, Morse Theory and Floer Homology"
status: published
origin: "pipeline"
proof_strategy: "stopped flow"
---

## Statement

Assume $\mathrm{AC}_\omega$. Under the compact regular closed-band hypothesis with $a<b$, the formula $H(s,x)=\Phi_{-s\max(f(x)-a,0)}(x)$, for $(s,x)\in[0,1]\times M^b$, is a strong deformation retraction onto $M^a$. Here $\Phi$ is the complete normalized ascending cutoff flow.

## Facts & Assumptions

[F1] [[lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time]]: Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless manifold, $a<b$, and let $K=f^{-1}([a,b])$ be compact with $df\ne0$ on $K$. For any Riemannian metric there is a compactly supported smooth field $Y$ agreeing with $\operatorname{grad}f/\|\operatorname{grad}f\|^2$ near $K$. Its complete flow $\Phi$ satisfies $f(\Phi_t(x))=f(x)+t$ for $x\in K$ and $a-f(x)\le t\le b-f(x)$. Thus every intervening level is reached in exactly its value difference.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For $f(x)\le a$ the time parameter is zero, so $H(s,x)=x$. For $a\le f(x)\le b$ the controlled-time identity gives $f(H(s,x))=(1-s)f(x)+sa\in[a,b]$. Thus $H$ takes values in $M^b$. [F1, given, algebra]

2.1 The maximum function and the complete flow are continuous, so the formula is continuous even at $f=a$. At $s=0$ it is the identity; at $s=1$ its image lies in $M^a$ and it fixes that set at every time. This proves the strong retraction, including empty sets. No smoothness across $f=a$ is asserted. [step 1.1, algebra] ∎
