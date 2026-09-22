---
id: lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters
kind: lemma
title: Maximal ideals of C(X) and zero set ultrafilters
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-zero-set-filter-and-zero-set-ultrafilter, def-prime-and-maximal-ideals, def-completely-regular-and-tychonoff-spaces]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "L. Gillman, M. Henriksen and M. Jerison, On a Theorem of Gelfand and Kolmogoroff Concerning Maximal Ideals in Rings of Continuous Functions (1954) — §2, Theorem 1 proof, pp. 448–449. This endpoint was inaccessible in the current run; the complete local alternative and failed recovery record are in the Batch 4 coverage ledger."
      url: "https://scispace.com/pdf/on-a-theorem-of-gelfand-and-kolmogoroff-concerning-maximal-25sdibbtka.pdf"
---

## Statement

Let $X$ be a Tychonoff space and let $C(X) = C(X,\mathbb R)$ be the ring of all
continuous real functions with pointwise operations
([[def-zero-set-filter-and-zero-set-ultrafilter]]). Then the two assignments

$$M \;\longmapsto\; \mathcal Z[M] := \{\,Z(f) : f \in M\,\}, \qquad \mathcal U \;\longmapsto\; M_{\mathcal U} := \{\,f \in C(X) : Z(f) \in \mathcal U\,\}$$

are mutually inverse bijections between the set of maximal ideals of $C(X)$
([[def-prime-and-maximal-ideals]]) and the set of z-ultrafilters on $X$; that is,
$\mathcal Z[M_{\mathcal U}] = \mathcal U$ for every z-ultrafilter and
$M_{\mathcal Z[M]} = M$ for every maximal ideal.

No choice principle is used: the argument is a theorem of ZF; functions may be
unbounded and no norm on $C(X)$ is involved.

## Facts & Assumptions

**Given:** A Tychonoff space $X$, the ring $C(X)$ of all continuous real functions with pointwise operations, and the family $\mathcal Z(X)$ of zero sets.

[L1] $\mathcal Z(X)$ is closed under finite intersections with $Z(f) \cap Z(g) = Z(f^2+g^2)$; $X = Z(0)$ and $\emptyset = Z(1)$; a z-filter is a family of zero sets containing $X$, omitting $\emptyset$, closed under finite intersections and upward closed in $\mathcal Z(X)$; a z-ultrafilter is a maximal z-filter ([[def-zero-set-filter-and-zero-set-ultrafilter]]).

[L2] An ideal of the commutative ring $C(X)$ is a subgroup closed under multiplication by arbitrary elements, and it is maximal when it is maximal among proper ideals; the ring has unit the constant function $1$, so an ideal is proper exactly when it omits $1$ ([[def-prime-and-maximal-ideals]]).

[L3] If $f \in C(X)$ has $Z(f) = \emptyset$ then $f(x) \ne 0$ for all $x$, so $1/f$ is continuous and $f$ is invertible in $C(X)$ ([[def-zero-set-filter-and-zero-set-ultrafilter]]).

## Proof

**Proof technique:** direct.

1.1 Let $M$ be a maximal ideal of $C(X)$. Then $\mathcal Z[M]$ is a z-filter: it contains $X = Z(0)$ because $0 \in M$, it omits $\emptyset$ because $Z(f) = \emptyset$ would make $f$ invertible by [L3] and force $1 \in M$ by [L2], and it is closed under finite intersections because $Z(f) \cap Z(g) = Z(f^2+g^2)$ with $f^2+g^2 \in M$ [L1]. [L1, L2, L3, algebra]

1.2 For a z-ultrafilter $\mathcal U$ the family $M_{\mathcal U}$ is a proper ideal: it contains $0$ since $Z(0) = X \in \mathcal U$; it is closed under addition because $Z(f)\cap Z(g) = Z(f^2+g^2) \subseteq Z(f+g)$ and $\mathcal U$ is upward closed; it is closed under multiplication by $h \in C(X)$ because $Z(f) \subseteq Z(hf)$; and it is proper because $1 \in M_{\mathcal U}$ would give $\emptyset = Z(1) \in \mathcal U$. [L1, L2, algebra]

1.3 **A separation property of z-ultrafilters.** If $\mathcal U$ is a z-ultrafilter and $Z \in \mathcal Z(X)$ with $Z \notin \mathcal U$, then there is $Z' \in \mathcal U$ with $Z \cap Z' = \emptyset$: otherwise $Z$ meets every member of $\mathcal U$, and then $\mathcal U' := \{Z'' \in \mathcal Z(X) : Z'' \supseteq Z \cap Z' \text{ for some } Z' \in \mathcal U\}$ is a z-filter: it contains $Z$ (for any $Z' \in \mathcal U$ one has $Z \supseteq Z \cap Z'$), so it is nonempty; it omits $\emptyset$, because $\emptyset = Z'' \supseteq Z \cap Z'$ would force $Z \cap Z' = \emptyset$, contrary to the standing assumption that $Z$ meets every member of $\mathcal U$; it is upward closed by definition; and it is closed under finite intersections because $Z''_1 \supseteq Z\cap Z'_1$ and $Z''_2 \supseteq Z\cap Z'_2$ give $Z''_1 \cap Z''_2 \supseteq Z \cap (Z'_1 \cap Z'_2)$ with $Z'_1 \cap Z'_2 \in \mathcal U$; since $\mathcal U' \supseteq \mathcal U$ and $Z \in \mathcal U' \setminus \mathcal U$, this contradicts the maximality of $\mathcal U$. [L1, algebra]

2.1 With $M$ maximal as in [step 1.1], $\mathcal Z[M]$ is upward closed in $\mathcal Z(X)$: let $f \in M$ and let $h \in C(X)$ satisfy $Z(f) \subseteq Z(h)$; if $h \notin M$, then maximality gives $1 = m + ah$ for some $m \in M$ and $a \in C(X)$, and the function $w := f^2 + m^2 \in M$ satisfies $w > 0$ everywhere, because at a point with $f(x) = 0$ one has $h(x) = 0$ and then $m(x) = 1 - a(x)h(x) = 1$, while at a point with $f(x) \ne 0$ one has $w(x) \ge f(x)^2 > 0$; hence $1/w$ is continuous and $1 = w\cdot(1/w) \in M$, contradicting the properness of $M$. So $h \in M$, and $\mathcal Z[M]$ is a z-filter by [step 1.1]. [step 1.1, L1, L2, algebra]

2.2 For a z-ultrafilter $\mathcal U$ the ideal $M_{\mathcal U}$ is maximal: let $N \supseteq M_{\mathcal U}$ be a proper ideal and let $h \in N$; if $Z(h) \notin \mathcal U$ then by [step 1.3] there is $Z(g) \in \mathcal U$ with $Z(g) \cap Z(h) = \emptyset$, so $g \in M_{\mathcal U} \subseteq N$ and $g^2+h^2 \in N$; but $Z(g^2+h^2) = \emptyset$, so $g^2+h^2$ is invertible by [L3] and $1 \in N$, contradicting properness. Hence $Z(h) \in \mathcal U$ and $h \in M_{\mathcal U}$, so $N = M_{\mathcal U}$. [step 1.2, step 1.3, L1, L2, L3]

3.1 For a maximal ideal $M$ the z-filter $\mathcal Z[M]$ is maximal: if $\mathcal W \supseteq \mathcal Z[M]$ is a z-filter and $h \in C(X)$ has $Z(h) \in \mathcal W$, then either $h \in M$ and hence $Z(h) \in \mathcal Z[M]$, or $h \notin M$ and maximality gives $1 = m + ah$ with $m \in M$, so that $Z(m) \cap Z(h) = \emptyset$ (a common zero would give $1 = 0$); now $Z(m) \in \mathcal Z[M] \subseteq \mathcal W$ and $Z(h) \in \mathcal W$, so $\emptyset \in \mathcal W$ by closure under intersections, contradicting that $\mathcal W$ is a z-filter. Hence every member of $\mathcal W$ is a member of $\mathcal Z[M]$, and $\mathcal Z[M] = \mathcal W$. [step 1.1, step 2.1, L1, L2, algebra]

3.2 The assignments are inverse: for a maximal ideal $M$, $f \in M_{\mathcal Z[M]}$ means $Z(f) = Z(m)$ for some $m \in M$, hence $Z(m) \subseteq Z(f)$ and $f \in M$ by the upward-closure argument of [step 2.1]; conversely $f \in M$ gives $Z(f) \in \mathcal Z[M]$; so $M_{\mathcal Z[M]} = M$. For a z-ultrafilter $\mathcal U$, $Z(f) \in \mathcal Z[M_{\mathcal U}]$ means $f \in M_{\mathcal U}$, that is, $Z(f) \in \mathcal U$; so $\mathcal Z[M_{\mathcal U}] = \mathcal U$. [step 1.2, step 2.1]

4.1 By [step 3.1] the assignment $M \mapsto \mathcal Z[M]$ sends maximal ideals to z-ultrafilters, by [step 2.2] the assignment $\mathcal U \mapsto M_{\mathcal U}$ sends z-ultrafilters to maximal ideals, and by [step 3.2] the two are inverse; hence they are mutually inverse bijections. [step 2.2, step 3.1, step 3.2] ∎

## Remarks

- **The two ingredients of maximality.** The forward direction uses that a maximal ideal is prime-like through the identity $1 = m + ah$; the reverse direction uses the separation property [step 2.2] of z-ultrafilters, which is a repackaging of maximality for z-filters.
- **No normality or compactness.** The argument uses only the ring structure of $C(X)$ and the lattice identity for zero sets; Tychonoffness is used only to have the class of spaces for which the later $\beta X$ statements are formulated.
