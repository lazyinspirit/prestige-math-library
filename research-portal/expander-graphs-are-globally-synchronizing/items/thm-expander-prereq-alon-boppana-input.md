---
id: thm-expander-prereq-alon-boppana-input
kind: theorem
title: The fixed-degree Alon–Boppana lower bound
domain: mathematics
status: draft
origin: pipeline
deps:
  - prop-expander-prereq-regular-mean-zero-spectrum
  - def-expander-prereq-asymptotic-quantifiers
  - lem-author-f736bc76cd5d-catalan-count
  - lem-author-f736bc76cd5d-moment-extraction
dependency_roles:
  prop-expander-prereq-regular-mean-zero-spectrum: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  lem-author-f736bc76cd5d-catalan-count: mathematical-premise
  lem-author-f736bc76cd5d-moment-extraction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Hoory, Linial and Wigderson, Expander Graphs and Their Applications, May
        2006 draft
      url: https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf
      locator: §2.1 p. 19; §2.4 p. 21; §2.5 Theorem 2.7 p. 22; §5.2.1–5.2.2 pp. 49–50
        (method attribution only)
dependency_level: 3
---

## Statement

For each fixed integer $d\ge3$, a sequence of finite $d$-regular graphs with orders tending to infinity has largest absolute nonconstant adjacency eigenvalue at least $2\sqrt{d-1}-o(1)$. The error is in the growing-order limit at fixed degree. This lower bound concerns achievable expansion and does not establish any synchronization threshold.

More precisely, graphs may be arbitrary symmetric nonnegative integer adjacency-slot matrices $A_n$ with every row sum $d$, including loops and repeated edges. The quantity meant is $\Lambda_n=\|A_n-(d/n)J\|_{\mathrm{op}}$, where $J$ is the all-ones matrix and the norm is Euclidean. For $n\ge2$, this equals $\max_{2\le i\le n}|\lambda_i(A_n)|$, retaining every eigenvalue except one constant-vector eigenvalue $d$. For $n=1$, $\Lambda_1=0$ and no maximum over nonconstant eigenvalues is used. For every $\varepsilon>0$, eventually $\Lambda_n\ge2\sqrt{d-1}-\varepsilon$. No connectedness or nonbipartiteness is assumed.

## Statement references

[[prop-expander-prereq-regular-mean-zero-spectrum]]

[[def-expander-prereq-asymptotic-quantifiers]]

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

[F1] For $n\ge2$, the centered norm is the largest absolute nonconstant eigenvalue, with multiplicities retained; for $n=1$, the centered norm is zero ([[prop-expander-prereq-regular-mean-zero-spectrum]]).

[F2] For fixed $d,k$ and every $\eta>0$, eventually $\Lambda_n\ge C_k^{1/(2k)}\sqrt{d-1}-\eta$, for the full adjacency-slot convention ([[lem-author-f736bc76cd5d-moment-extraction]]).

[F3] The Dyck-word numbers satisfy $C_k^{1/(2k)}\to2$ ([[lem-author-f736bc76cd5d-catalan-count]]).

[F4] The asymptotic error is at fixed degree and along increasing graph order ([[def-expander-prereq-asymptotic-quantifiers]]).

## Proof

1.1 Fix $d\ge3$ and $\varepsilon>0$. By [F3], choose an integer $k\ge1$ such that $C_k^{1/(2k)}\sqrt{d-1}\ge2\sqrt{d-1}-\varepsilon/2$. Keep this $k$ fixed when letting the order grow. Apply [F2] with $\eta=\varepsilon/2$. Beyond its order cutoff, $\Lambda_n\ge2\sqrt{d-1}-\varepsilon$. [F2, F3, F4, choose, algebra]

2.1 Since $n\to\infty$, eventually $n\ge2$, so [F1] identifies this with the claimed absolute nonconstant adjacency bound. If an order-one term occurs, its matrix is $[d]$ and its centered matrix is $[d]-d[1]=[0]$, giving $\Lambda_1=0$ as stated. This initial term has no effect on an eventual assertion. Equivalently put $r_n=\max\{0,2\sqrt{d-1}-\Lambda_n\}$. Step 1.1 says $r_n\to0$, and $\Lambda_n\ge2\sqrt{d-1}-r_n$, which is exactly the stated one-sided $o(1)$ formulation. Since every helper counted actual slot labels, the conclusion includes diagonal entries counted once and parallel slots without a convention transfer. No synchronization or construction assertion was used or proved. [F1, F4, step 1.1, algebra] ∎

## Source notes

The independent source is Hoory–Linial–Wigderson, *Expander Graphs and Their Applications*, May 2006 draft: §2.1, p. 19 allows self-loops and multiple edges; §2.4, p. 21 defines the absolute nonconstant parameter; §2.5, Theorem 2.7, p. 22 states the fixed-degree bound; §5.2.1–5.2.2, pp. 49–50 supplies the closed-walk/Catalan method and explicitly distinguishes it from the stronger second-eigenvalue bound. Those passages were read in the retained PDF. This proof uses the same moment method, but replaces the source's distant-vertices Rayleigh quotient with a trace argument and proves the Dyck-word count and slot-label injection explicitly. The fixed-loop reversal construction addresses the library's allowance of arbitrary diagonal slot counts; it does not infer that an ordinary two-incidence loop is identical to a single diagonal slot. The source is independent background and method attribution, not an outstanding imported logical premise. No complete reading of Chapter 5 or reconstruction of its stronger diameter estimate, explicit Ramanujan constructions, or other cited literature is claimed.
