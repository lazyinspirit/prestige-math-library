---
id: cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative
kind: corollary
title: "A $C^1$ field with vanishing curl on a star-shaped open subset of $\\mathbb R^3$ is conservative"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-curl-vanishes-exactly-when-a-field-is-closed, cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains, def-star-shaped-open-subset-of-rn, def-piecewise-c1-path-connected-conservative-and-path-independent, def-divergence-and-curl-of-a-c1-vector-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.1"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^3$ be open and star-shaped and let $F:U\to\mathbb R^3$ be $C^1$ with $\operatorname{curl}F=0$ on $U$. Then a $C^1$ field with vanishing curl on a star-shaped open subset of $\mathbb R^3$ is exact, conservative and path-independent: there is a $C^2$ function $\phi:U\to\mathbb R$ with $F=\nabla\phi$, any two piecewise-$C^1$ paths in $U$ with the same endpoints give $F$ the same vector line integral, and

$$\int_\gamma F\cdot d\mathbf r=0$$

for every closed piecewise-$C^1$ path $\gamma$ in $U$. Conversely, a field exact on such a set has vanishing curl, so on a star-shaped open subset of $\mathbb R^3$ vanishing curl and exactness are equivalent.

## Facts & Assumptions

**Given:** The star-shaped open set $U\subseteq\mathbb R^3$ with a star centre $a\in U$, and the $C^1$ field $F:U\to\mathbb R^3$ with $\operatorname{curl}F=0$ on $U$.

[F1] A nonempty open set $U\subseteq\mathbb R^n$ is **star-shaped with respect to** $a\in U$ when $a+t(x-a)\in U$ for every $x\in U$ and $0\le t\le1$ ([[def-star-shaped-open-subset-of-rn]]).

[F2] For a continuous field $F$ on an open $U\subseteq\mathbb R^n$, a $C^1$ function $\phi:U\to\mathbb R$ is a **potential** when $F=\nabla\phi$; $F$ is **conservative** when it has a potential, and **path-independent** when any two piecewise-$C^1$ paths in $U$ with the same initial and terminal points have equal vector line integrals ([[def-piecewise-c1-path-connected-conservative-and-path-independent]]).

[F3] The curl of a $C^1$ field $F$ on an open $U\subseteq\mathbb R^3$ is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[L1] A $C^1$ field on an open subset of $\mathbb R^3$ is closed if and only if its curl vanishes identically ([[cor-curl-vanishes-exactly-when-a-field-is-closed]]).

[L2] Let $U\subseteq\mathbb R^n$ be open and star-shaped and let $F:U\to\mathbb R^n$ be $C^1$. Then the five conditions that $F$ be closed, exact, conservative, path-independent, and give every closed piecewise-$C^1$ path in $U$ zero integral are equivalent ([[cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains]]).

## Proof

**Proof technique:** direct.

1.1 The field $F$ is $C^1$ on the open set $U\subseteq\mathbb R^3$ and its curl vanishes identically, so by the reverse direction of [L1] it is closed. [given, L1, F3]

1.2 By [F1] the set $U$ is nonempty, open and star-shaped with respect to its centre $a$. With $n=3$ these are exactly the hypotheses [L2] places on the domain, and $F$ is $C^1$ as [L2] requires of the field. [given, F1]

2.1 By steps 1.1 and 1.2, [L2] applies and its first condition holds, so all five hold: $F$ is exact, hence there is a $C^2$ function $\phi$ on $U$ with $F=\nabla\phi$; $F$ is conservative, so it has a potential in the sense of [F2]; $F$ is path-independent; and every closed piecewise-$C^1$ path in $U$ gives $F$ integral zero. [step 1.1, step 1.2, L2, F2]

3.1 For the converse reading, suppose instead that $F$ is exact on $U$. Then the first condition of [L2] holds by the same equivalence, so $F$ is closed, and the forward direction of [L1] makes $\operatorname{curl}F$ vanish identically. Together with step 2.1 this gives the stated equivalence between vanishing curl and exactness on a star-shaped open subset of $\mathbb R^3$. [step 2.1, L1, L2, F2] ∎

## Remarks

- **The hypothesis on the domain is doing work.** Star-shapedness is not a convenience: the companion examples page gives a $C^1$ field with vanishing curl on a connected open subset of $\mathbb R^3$ that has no potential. What fails there is exactly [F1], since no point of the complement of a line is a star centre for it.

- **Why the potential is $C^2$ and not merely $C^1$.** Exactness in [[def-closed-and-exact-c1-vector-fields]] asks for a $C^2$ potential, which is what makes all mixed second partial derivatives of $\phi$ available and continuous; a conservative field in the sense of [F2] is only required to have a $C^1$ one. Step 2.1 supplies the stronger form because [L2] does.
