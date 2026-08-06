---
id: cor-image-and-preimage-round-trips-detect-injectivity-and-surjectivity
kind: corollary
title: "For $f : A \\to B$: $S \\subseteq f^{-1}[f[S]]$ for every $S \\subseteq A$, with equality for every such $S$ if and only if $f$ is injective; and $f[f^{-1}[T]] = T \\cap f[A]$ for every $T \\subseteq B$, so equality with $T$ holds for every such $T$ if and only if $f$ is surjective"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-injection-surjection-bijection, def-image-and-preimage-under-a-relation, def-function, def-unordered-pair-and-singleton, lem-unions-and-intersections-of-small-families, def-subset-and-proper-subset, def-axiom-of-extensionality, def-relation-domain-range-and-field]
justified_by: []
aliases: []
landmark: false
short: "round trips detect injectivity and surjectivity"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Image (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Image_(mathematics)"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $f : A \to B$. Then

- (i) $S \subseteq f^{-1}[f[S]]$ for every $S \subseteq A$;
- (ii) equality holds in (i) for every $S \subseteq A$ if and only if $f$ is injective;
- (iii) $f[f^{-1}[T]] = T \cap f[A]$ for every $T \subseteq B$;
- (iv) $f[f^{-1}[T]] = T$ for every $T \subseteq B$ if and only if $f$ is surjective.

## Facts & Assumptions

**Given:** a function $f : A \to B$.

[L1] $b \in R[A]$ holds if and only if $(a,b) \in R$ for some $a \in A$ ([[def-image-and-preimage-under-a-relation]]).

[L2] We write $f : A \to B$, and say $f$ is a **function from $A$ to $B$**, when $f$ is a function with $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$ ([[def-function]]).

[L3] $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all $x, y \in A$ ([[def-injection-surjection-bijection]]).

[L4] $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$ with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals $B$ ([[def-injection-surjection-bijection]]).

[L5] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L6] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L7] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L8] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L9] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

## Proof

**Proof technique:** direct.

1.1 Membership criteria used throughout: for $S \subseteq A$, $y \in f[S]$ exactly when $y = f(s)$ for some $s \in S$; and for $T \subseteq B$, $a \in f^{-1}[T]$ exactly when $a \in A$ and $f(a) \in T$. [L1, L2, L6, L9]

2.1 Claim (i): if $s \in S$ then $f(s) \in f[S]$, so $s \in f^{-1}[f[S]]$. [step 1.1]

2.2 Claim (iii): if $y \in f[f^{-1}[T]]$ then $y = f(a)$ with $a \in A$ and $f(a) \in T$, so $y \in T$ and $y \in f[A]$; conversely if $y \in T$ and $y = f(a)$ with $a \in A$, then $f(a) \in T$ puts $a$ in $f^{-1}[T]$ and $y$ in $f[f^{-1}[T]]$. [L5, L7, step 1.1]

3.1 Claim (ii): suppose $f$ is injective and $a \in f^{-1}[f[S]]$ for some $S \subseteq A$. Then $f(a) \in f[S]$, so $f(a) = f(s)$ for some $s \in S$, and injectivity gives $a = s \in S$; with step 2.1 this is equality. Conversely, if $f$ is not injective, take $a \neq a'$ in $A$ with $f(a) = f(a')$ and put $S := \{a\}$; then $a' \in f^{-1}[f[S]]$ while $a' \notin S$, so equality fails for that $S$. [L3, L8, step 1.1, step 2.1]

3.2 Claim (iv): if $f$ is surjective then $f[A] = B$, so for $T \subseteq B$ claim (iii) gives $f[f^{-1}[T]] = T \cap B = T$. Conversely, if the equality holds for every $T \subseteq B$, take $T := B$; claim (iii) gives $B = B \cap f[A] = f[A]$, which is surjectivity. [L4, L5, L6, L7, step 2.2]

4.1 Claims (i) to (iv) are established, which is the statement. [step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

- **Only one of the two criteria needs the injectivity lemma.** Claim (ii) is the round-trip form of the equality criterion in [[prop-images-of-unions-and-intersections-under-a-function]]; the argument is repeated here because the witness used to break equality is a singleton rather than a pair of sets.
