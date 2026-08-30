---
id: thm-the-connecting-morphism-exists-and-is-unique
kind: theorem
title: "The connecting morphism exists and is unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-snake-data,
       def-pullbacks-and-pushouts,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers,
       thm-a-short-exact-sequence-is-a-kernel-cokernel-pair,
       thm-degenerate-exactness-criteria,
       thm-the-pullback-of-an-epimorphism-is-an-epimorphism,
       thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism,
       cor-the-pushout-of-a-monomorphism-is-a-monomorphism]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.17(1)"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Statement

Let

```tikzcd
0 \arrow[r] & A \arrow[r, "i"] \arrow[d, "f"'] & B \arrow[r, "p"] \arrow[d, "g"'] & C \arrow[r] \arrow[d, "h"'] & 0 \\
0 \arrow[r] & A' \arrow[r, "i'"'] & B' \arrow[r, "p'"'] & C' \arrow[r] & 0
```

be snake data in the Mac Lane shape. Let $k_h:K \to C$ be a kernel of $h$ and
$q_f:A' \to Q$ a cokernel of $f$.

Form the pullback $P = B \times_C K$ with projections
$$\pi':P \to B,\qquad \pi:P \to K,$$
and the pushout $R = Q \amalg_{A'} B'$ of $q_f$ and $i'$ with coprojections
$$\iota:Q \to R,\qquad \iota':B' \to R.$$

Then there exists a unique morphism
$$\delta:K \to Q$$
such that
$$\iota \delta \pi = \iota' g \pi'.$$

## Facts & Assumptions

**Given:** The snake-data diagram in the statement, together with $k_h$ and $q_f$.

[L1] In a short exact sequence, the left map is a kernel and the right map is a cokernel ([[thm-a-short-exact-sequence-is-a-kernel-cokernel-pair]]).

[L2] Pullbacks and pushouts exist, pullbacks of epimorphisms are epimorphisms, and the induced map on kernels in a pullback square is an isomorphism ([[def-pullbacks-and-pushouts]], [[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]], [[thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism]]).

[L3] A pushout of a monomorphism is again a monomorphism ([[cor-the-pushout-of-a-monomorphism-is-a-monomorphism]]).

[L4] A complex $0 \to X \xrightarrow{u} Y \xrightarrow{v} Z \to 0$ is short exact exactly when $u$ is a kernel of $v$ and $v$ is epic ([[thm-degenerate-exactness-criteria]]).

[L5] Kernels and cokernels are characterized by their universal properties ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 Because the top row is short exact, [L1] says that $p$ is epic and $i=\ker(p)$. Form the pullback of $p$ along $k_h$:

```tikzcd P \arrow[r, "\pi'"] \arrow[d, "\pi"'] & B \arrow[d, "p"] \\ K \arrow[r, "k_h"'] & C. ```

By [L2], the map $\pi$ is epic. The induced map on kernels identifies $\ker(\pi)$ with $\ker(p)$, so after transporting along $i=\ker(p)$ we obtain a kernel $j:A \to P$ of $\pi$ satisfying $\pi' j = i$. [L1, L2, construct]

1.2 Form the pushout of $q_f$ and $i'$:

```tikzcd A' \arrow[r, "i'"] \arrow[d, "q_f"'] & B' \arrow[d, "\iota'"] \\ Q \arrow[r, "\iota"'] & R. ```

Since $i'$ is monic by [L1], [L3] makes $\iota$ monic. [L1, L3, construct]

2.1 Step 1.1 gives $j=\ker(\pi)$ and makes $\pi$ epic. By [L4], the sequence $$0 \to A \xrightarrow{j} P \xrightarrow{\pi} K \to 0$$ is therefore short exact. Applying [L1] to this new short exact sequence shows that $\pi$ is also a cokernel of $j$. [L1, L4, step 1.1]

2.2 The pullback relation gives $$h p \pi' = h k_h \pi = 0,$$ so the snake-data square yields $$p' g \pi' = 0.$$ Because $i'=\ker(p')$ by [L1], [L5] gives a unique map $a:P \to A'$ with $$i' a = g \pi'.$$ [L1, L5, step 1.1, construct]

3.1 Since $\pi' j = i$ and the left square commutes, we have $$i' a j = g \pi' j = g i = i' f.$$ The map $i'$ is monic, so $a j = f$. Therefore $$q_f a j = q_f f = 0.$$ Because $\pi$ is a cokernel of $j$ by step 2.1, [L5] yields a unique morphism $\delta:K \to Q$ with $$\delta \pi = q_f a.$$ [L1, L5, step 2.1, step 2.2, algebra]

4.1 Composing with the pushout coprojection gives $$\iota \delta \pi = \iota q_f a = \iota' i' a = \iota' g \pi',$$ which is the required relation. If $\delta_1$ and $\delta_2$ both satisfy that relation, then $$\iota \delta_1 \pi = \iota \delta_2 \pi.$$ Since $\pi$ is epic by step 1.1 and $\iota$ is monic by step 1.2, this forces $\delta_1=\delta_2$. [step 1.1, step 1.2, step 3.1, algebra]

5.1 Hence the connecting morphism exists and is unique. [step 3.1, step 4.1] ∎
