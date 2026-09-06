---
id: thm-immerman-szelepcsenyi-nl-equals-conl
kind: theorem
title: "Immerman-Szelepcsényi theorem: NL equals coNL"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-read-only-input-logspace-machine, def-read-only-input-workspace-classes, def-l-and-nl, lem-nonreachability-has-an-inductive-counting-certificate]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.18"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
    - title: "Harvard CS 221, Lecture 5, §3"
      url: "https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf"
---

## Statement

$$ \mathrm{NL}=\mathrm{coNL}. $$
Moreover, in the same read-only-input model, if $s$ is work-space constructible
and $\log_2(n+2)=O(s(n))$, then
$\mathrm{NWORKSPACE}(s(n))=\mathrm{coNWORKSPACE}(s(n))$.

## Facts & Assumptions

**Given:** a fixed nondeterministic decider $M$ for $A\in\mathrm{NWORKSPACE}(s)$,
where $s$ has the stated constructibility and logarithmic floor.

[L2] The inductive-counting algorithm certifies nonreachability in an $N$-vertex digraph using $O(\log N)$ work space and a polynomial-length read-once certificate ([[lem-nonreachability-has-an-inductive-counting-certificate]]).

## Proof

**Proof technique:** inductive counting on an implicit configuration graph.

1.1 Fix an integer $a$ bounding $M$'s visited work cells by $a s(n)$ for all sufficiently large $n$; handle the finitely many exceptional input lengths separately. Run the work-space constructor for $s(n)$ on a virtual unary input of length $n$; an address on the actual endmarked input provides this virtual input in $O(\log(n+2))$ space. A configuration records the fixed finite control, work symbols, work-head positions, and the endmarked input-head position. Since $M$ is fixed, choose a fixed constant $d$ so that every configuration within the cap has a padded binary description of length $K=d(s(n)+\lceil\log_2(n+2)\rceil+1)=O(s(n))$. [given, construct]

2.1 Use all $2^K$ binary strings as candidate vertex names and add a fresh target $t$. Invalid configuration names are isolated. Between valid names put an edge exactly for a legal transition of $M$ on the actual input $x$ within the work cap, and add an edge from each accepting configuration to $t$. The source is the actual initial configuration. Enumerating names, validating them, checking a transition, and recognizing an accepting state all take $O(K)$ space by direct scans of the fixed-length records and of $x$. Thus a path to $t$ exists exactly when $M$ accepts $x$. This constructs a well-defined finite graph for every input string $x$, without querying validity of any externally supplied STCON encoding. [step 1.1, construct]

3.1 Run the algorithm of [L2] on this implicit graph, with $N=2^K+1$. Its implementation only enumerates vertices and requests adjacency tests while checking bounded paths and successive reachable counts. Supply each such test by step 2.1. The previous layer's verified count, the current layer count, the finitely many vertex/loop indices, and one bounded path at a time have $O(\log N)=O(K)$ bits. The certificate checks are sequential nested loops of fixed depth, not a recursion stack through all layers. All loop and path lengths are bounded by polynomials in $N$, and each guessed certificate field has bounded length, so every branch halts. Nondeterministic choices generate the read-once certificate as needed; it is never stored. Soundness and completeness of [L2] now give an $O(s(n))$-space decider for $\overline A$. [L2, step 2.1, construct]

4.1 This proves closure of $\mathrm{NWORKSPACE}(s)$ under complement. By the definition of the co-class, closure implies equality with its co-class, since complementing twice recovers the original language. Finally $s(n)=\lceil\log_2(n+2)\rceil$ is work-space constructible: count the unary input in binary and compute the bit length, treating a power of two separately for the ceiling. This uses $O(\log(n+2))$ work cells. Its class is exactly NL under [[def-l-and-nl]], so the same equality specializes to $\mathrm{NL}=\mathrm{coNL}$. [step 3.1, algebra] ∎
