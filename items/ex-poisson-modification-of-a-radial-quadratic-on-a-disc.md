---
id: ex-poisson-modification-of-a-radial-quadratic-on-a-disc
kind: example
title: "Poisson modification flattens a radial quadratic on the chosen inner disc"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-poisson-modification-of-a-subharmonic-function, thm-poisson-modification-preserves-subharmonicity-and-majorizes, cor-uniqueness-for-the-bounded-plane-dirichlet-problem]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Example

Fix $0<r<2$ and consider the subharmonic function $u(z)=|z|^2$ on the disc
$|z|<2$. Its Poisson modification on the inner disc $D(0,r)$ is
$$P_{D(0,r)}u(z)=\begin{cases}r^2,& |z|<r,\\ |z|^2,& r\le |z|<2.\end{cases}$$

## Facts & Assumptions

**Given:** The function $u(z)=|z|^2$ on $|z|<2$ and an inner radius $0<r<2$.

[L1] The Poisson modification is harmonic on the chosen inner disc, equals the original function outside it, and majorizes the original function ([[thm-poisson-modification-preserves-subharmonicity-and-majorizes]], [[def-poisson-modification-of-a-subharmonic-function]]).

[L2] A bounded-domain harmonic extension of fixed continuous boundary data is unique ([[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

## Verification

**Proof technique:** direct.

1.1 On the circle $|z|=r$, the boundary values of $u$ are the constant $r^2$. Hence the constant function $h(z)=r^2$ is harmonic on $D(0,r)$ and has exactly the boundary values required by the Poisson modification. [given, algebra]

2.1 By [L1], the modified function agrees with $u$ outside $D(0,r)$ and is harmonic inside. Since step 1.1 gives a harmonic candidate with the correct boundary data on the inner disc, [L2] forces the inside harmonic piece to be exactly $h(z)=r^2$. This gives the displayed formula. [L1, L2, step 1.1] ∎
