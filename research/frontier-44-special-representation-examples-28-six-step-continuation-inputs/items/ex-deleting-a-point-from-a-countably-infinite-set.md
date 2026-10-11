---
id: ex-deleting-a-point-from-a-countably-infinite-set
kind: example
title: "Deleting one point of a countably infinite set leaves a set equinumerous with it"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-countable, def-equinumerous, def-injection-surjection-bijection,
       thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse,
       prop-composition-preserves-injectivity-surjectivity-and-bijectivity,
       thm-omega-is-peano-system, lem-nat-nonzero-is-successor, lem-nat-discrete,
       lem-nat-trichotomy, thm-nat-linear-order, def-nat-addition, lem-pigeonhole,
       def-natural-numbers, def-nat-order, def-subset-and-proper-subset,
       def-set-difference-and-symmetric-difference, def-unordered-pair-and-singleton,
       def-function, def-axiom-of-extensionality, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§1.6, Example 1.43 and the following paragraph, printed p. 16: N is in one-to-one correspondence with the proper subset of squares, which does not happen for finite sets"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§0.3, Example 0.3.30 and the paragraph after Definition 0.3.29, printed p. 18: the even naturals are equinumerous with N, and a set is infinite exactly when it is in one-to-one correspondence with a proper subset of itself"
---

## Example

Let $X$ be countably infinite ([[def-countable]]) and let $x \in X$. Then
$X \approx X \setminus \{x\}$ ([[def-equinumerous]]): deleting one point leaves
a set of the same size, and $X \setminus \{x\}$ is a proper subset of $X$
([[def-subset-and-proper-subset]],
[[def-set-difference-and-symmetric-difference]]). The basic instance is
$X = \mathbb{N}$, $x = 0$, where the successor map $\sigma$ is a bijection
$\mathbb{N} \to \mathbb{N} \setminus \{0\}$ ([[thm-omega-is-peano-system]],
[[lem-nat-nonzero-is-successor]]); a general $X$ transports a shift of
$\mathbb{N}$ along a bijection $\mathbb{N} \to X$. No finite set shares the
behaviour: by claim 5 of [[lem-pigeonhole]] no finite set is equinumerous with a
proper subset of itself. No choice principle is used.

## Facts & Assumptions

**Given:** A countably infinite set $X$ and a point $x \in X$; the von Neumann naturals $\mathbb{N} = \omega$ with $0 = \varnothing$ and successor $\sigma$ ([[def-natural-numbers]]); and the additive order $m \le n \iff \exists k \in \mathbb{N}\,(m + k = n)$, $m < n \iff (m \le n \text{ and } m \ne n)$ ([[def-nat-order]]). Write $A \approx B$ when a bijection $A \to B$ exists ([[def-equinumerous]]).

[F1] $X$ is countably infinite exactly when $X \approx \mathbb{N}$ ([[def-countable]]).

[F2] $\sigma$ is injective, $\sigma(n) \ne 0$ for every $n \in \mathbb{N}$, and every $n \ne 0$ equals $\sigma(m)$ for some $m \in \mathbb{N}$ ([[thm-omega-is-peano-system]], [[lem-nat-nonzero-is-successor]]).

[F3] Discreteness and linearity of the order: $m < n \iff \sigma(m) \le n$ for all $m, n \in \mathbb{N}$ ([[lem-nat-discrete]]); $\le$ is reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]); and $m + 0 = m$, $m + \sigma(k) = \sigma(m + k)$ for all $m, k$ ([[def-nat-addition]]).

[F4] Exactly one of $m < n$, $m = n$, $n < m$ holds ([[lem-nat-trichotomy]]).

[F5] A composite of bijections is a bijection; the inverse of a bijection is a bijection; and the restriction of a bijection to a subset is a bijection onto the image of that subset ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]], [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]], [[def-injection-surjection-bijection]]).

[F6] Claim 5 of [[lem-pigeonhole]]: if $A \subseteq n$ and $n \approx A$ for a natural number $n$, then $A = n$; transporting along a bijection, no finite set is equinumerous with a proper subset of itself.

[F7] $z \in X \setminus \{x\}$ holds exactly when $z \in X$ and $z \ne x$, since $z \in \{x\}$ exactly when $z = x$ ([[def-set-difference-and-symmetric-difference]], [[def-unordered-pair-and-singleton]]); in particular $X \setminus \{x\} \subseteq X$ ([[def-subset-and-proper-subset]]).

[F8] The image and preimage of a set under a function ([[def-image-and-preimage-under-a-relation]]): $f[S] = \{\, f(s) : s \in S \,\}$, and if $f$ is injective then $t \in f[S]$ has exactly one preimage in $S$.

## Verification

**Proof technique:** direct.

1.1 For $n \in \mathbb{N}$ put $\varphi_n := \{\, (k,v) \in \mathbb{N} \times \mathbb{N} : (k < n \wedge v = k) \vee (n \le k \wedge v = \sigma(k)) \,\}$, a set by Separation, and read it as a map. It is a function $\mathbb{N} \to \mathbb{N} \setminus \{n\}$. Indeed, for each $k \in \mathbb{N}$ the two clauses are exhaustive and mutually exclusive: if $k < n$ then $n \le k$ fails, since $k < n$ gives $k \le n$ and $k \ne n$ while $n \le k$ would let antisymmetry give $k = n$; and if $k < n$ fails then $k = n$ or $n < k$ by trichotomy, so $n \le k$ holds by reflexivity or by $n < k$ implying $n \le k$. Hence exactly one value $v$ is paired with $k$, and $v$ is $k \in \mathbb{N}$ or $\sigma(k) \in \mathbb{N}$, so $\operatorname{dom}\varphi_n = \mathbb{N}$. The values avoid $n$: in the first clause $v = k \ne n$; in the second clause $v = \sigma(k) \ne n$, because $\sigma(k) = n \le k$ would give $\sigma(k) \le k$ and hence $k < k$ by discreteness, which is impossible since $k < k$ would require $k \ne k$. [F3, F4, construct]

1.2 $X \setminus \{x\}$ is a proper subset of $X$. By [F7] it is a subset of $X$; it differs from $X$ because $x \in X$ while $x \notin X \setminus \{x\}$, as $x = x$. [F7]

1.3 No finite set is equinumerous with a proper subset of itself. Let $F$ be finite, let $A \subseteq F$ with $A \ne F$, and suppose towards a contradiction that $h : F \to A$ is a bijection. Fix $k \in \mathbb{N}$ and a bijection $\psi : F \to k$, possible since $F$ is finite. Then $A \approx \psi[A]$ via the restriction of $\psi$ to $A$ by [F5], and $\psi[A] \approx A \approx F \approx k$ by symmetry and transitivity of $\approx$, so $\psi[A] \subseteq k$ satisfies $k \approx \psi[A]$; claim 5 of [F6] gives $\psi[A] = k$. Then $F \subseteq A$: for $f \in F$ the value $\psi(f) \in k = \psi[A]$ equals $\psi(a)$ for some $a \in A$, so $f = a$ by injectivity of $\psi$. With $A \subseteq F$ this gives $A = F$, contradicting $A \ne F$. [F5, F6]

1.4 For $X = \mathbb{N}$ and $x = 0$ the witness is the successor map: $\sigma$ is injective and never zero by [F2], so it is a function $\mathbb{N} \to \mathbb{N} \setminus \{0\}$, and it is onto $\mathbb{N} \setminus \{0\}$ because every $n \ne 0$ is a successor by [F2]. Hence $\sigma$ is a bijection $\mathbb{N} \to \mathbb{N} \setminus \{0\}$. [F2]

1.5 Since $X$ is countably infinite, [F1] supplies a bijection $e : \mathbb{N} \to X$; let $n \in \mathbb{N}$ with $e(n) = x$, which exists because $e$ is onto. Then $e[\mathbb{N} \setminus \{n\}] = X \setminus \{x\}$: if $t = e(k)$ with $k \ne n$ then $t \ne x$, since $t = x = e(n)$ would force $k = n$ by injectivity of $e$; conversely, if $t \in X$ and $t \ne x$, then $t = e(k)$ for some $k$ by surjectivity and $k \ne n$ since $e(n) = x \ne t$. [F1, F5, F8]

2.1 $\varphi_n$ is injective. Let $\varphi_n(k) = \varphi_n(l)$ and split each of $k, l$ by trichotomy; the alternatives $k = n$ and $n < k$ both assign the value $\sigma(k)$, and $n \le k$ in both. If $k < n$ and $l < n$ the values are $k$ and $l$, so $k = l$. If $n \le k$ and $n \le l$ the values are $\sigma(k)$ and $\sigma(l)$, so $k = l$ by injectivity of $\sigma$. In a mixed case, say $k < n$ and $n \le l$, the values are $k$ and $\sigma(l)$ with $l = n$ or $n < l$: if $l = n$ then $k = \sigma(n) \le n$ because $k < n$ gives $k \le n$, so $\sigma(n) \le n$ and discreteness gives $n < n$, impossible; if $n < l$ then $k = \sigma(l) \le n$, so discreteness gives $l < n$, contradicting $n < l$ by trichotomy. The case $n \le k$ with $l < n$ is symmetric. Hence $k = l$ in every case. [step 1.1, F2, F3, F4]

2.2 The restriction $e_0$ of $e$ to $\mathbb{N} \setminus \{n\}$, read as a map into $X \setminus \{x\}$, is a bijection $\mathbb{N} \setminus \{n\} \to X \setminus \{x\}$: it is injective, being a restriction of the injection $e$, and it is onto, since its image is $e[\mathbb{N} \setminus \{n\}] = X \setminus \{x\}$ by step 1.5. [step 1.5, F5]

3.1 $\varphi_n$ is surjective onto $\mathbb{N} \setminus \{n\}$. Let $m \in \mathbb{N}$ with $m \ne n$. If $m < n$ then $\varphi_n(m) = m$; if $n < m$ then $n \le m$ with $n \ne m$, so $m = n + j$ for some $j \ne 0$, $j = \sigma(i)$ by [F2], and $m = n + \sigma(i) = \sigma(n + i)$ by [F3]. Then $k := n + i$ satisfies $n \le k$ (witnessed by $i$) and $\varphi_n(k) = \sigma(k) = m$. So $\varphi_n$ is onto $\mathbb{N} \setminus \{n\}$, and with step 2.1 it is a bijection $\mathbb{N} \to \mathbb{N} \setminus \{n\}$. [step 1.1, step 2.1, F2, F3, F4]

4.1 The composite $e_0 \circ \varphi_n \circ e^{-1} : X \to X \setminus \{x\}$ is a bijection: $e^{-1}$ is a bijection $X \to \mathbb{N}$ by [F5], $\varphi_n$ is a bijection $\mathbb{N} \to \mathbb{N} \setminus \{n\}$ by step 3.1, and $e_0$ is a bijection $\mathbb{N} \setminus \{n\} \to X \setminus \{x\}$ by step 2.2, so by [F5] the composite is a bijection. Hence $X \approx X \setminus \{x\}$. [step 3.1, step 2.2, F5]

5.1 Therefore $X \approx X \setminus \{x\}$ by step 4.1, the set $X \setminus \{x\}$ is a proper subset of $X$ by step 1.2, the case $X = \mathbb{N}$, $x = 0$ is the successor bijection of step 1.4, and no finite set is equinumerous with a proper subset of itself by step 1.3. Every map used is defined by an explicit rule or is the unique inverse of a bijection, so no choice principle is used. [step 1.2, step 1.3, step 1.4, step 4.1] ∎

## Remarks

- The shift $\varphi_n$ is the identity below $n$ and the successor above it; the point $n$ itself is absorbed into the second clause, and the value $n$ is skipped. Deleting $x$ from $X$ is exactly conjugating this one missing value through the bijection $e$.

- The contrast with finite sets is the reason the example is worth stating: [[lem-pigeonhole]] claim 5 shows that deleting a point from a finite set always changes its size, so "same size after deleting a point" is a genuine feature of the infinite case rather than an accident of the notation.
