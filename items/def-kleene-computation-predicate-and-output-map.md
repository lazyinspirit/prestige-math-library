---
id: "def-kleene-computation-predicate-and-output-map"
kind: "definition"
title: "Kleene computation predicate and output map"
status: published
origin: "pipeline"
deps: ["lem-fixed-coding-primitive-recursive-arithmetic-and-sequences", "def-effective-encoding-of-turing-machines", "def-turing-machine-configuration", "def-one-step-configuration-relation", "def-partial-function-computed-by-a-machine", "lem-finite-tuples-admit-effective-prefix-free-encodings"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gallier §2.3, adapted from register configurations to the published machine syntax"
      url: https://www.cis.upenn.edu/~cis5110/notes/tcbook-comp.pdf
---

## Definition

Use the list coding of [[lem-fixed-coding-primitive-recursive-arithmetic-and-sequences]]. Write $[a_0,\ldots,a_{r-1}]$ for repeated cons ending in zero, not for an interval. The index $e\in\mathbb N$ denotes the binary word obtained by deleting the leading $1$ from $\operatorname{bin}(e+1)$: these are exactly the binary words in length-lexicographic order, starting with the empty word. Parse it by [[def-effective-encoding-of-turing-machines]]. Invalid codes and codes with fewer than two input letters denote the nowhere-defined numeric function. These conventions leave the published literal program syntax unchanged.

Fix an arity $k\ge1$. Encode $\mathbf a=(a_1,\ldots,a_k)$ as the published word $E(\operatorname{bin}(a_1),\ldots,\operatorname{bin}(a_k))$ from [[lem-finite-tuples-admit-effective-prefix-free-encodings]], including its unary arity header. Replace each bit $0,1$ by the machine letters $1,2$. This is the initial tape, followed by blanks, with state and head both zero. Unary inputs also carry the one-entry tuple wrapper. The empty parameter tuple for primitive recursion is not an arity-zero machine input in this interface.

For a decoded program with $m$ states and $r$ tape symbols, a configuration code is exactly $[q,h,v]$, where $q<m$ and $v$ is a list of symbols less than $r$. Require $\ell(v)\ge h+1$, and require either $\ell(v)=h+1$ or the last symbol of $v$ is nonblank. Coordinates beyond $\ell(v)$ are zero. Thus the represented tape has finite support and is trimmed exactly through the larger of the head position and last nonblank position. This is a unique list representation of a configuration in [[def-turing-machine-configuration]]. It avoids any ambiguity from overlap of numerical state and tape alphabets.

A history is a list of such configuration codes. The predicate $T_k(e,\mathbf a,z)$ holds precisely when: the program is valid with at least two input letters; $z$ is a nonempty history; its first entry is the initial configuration on the specified tuple; every entry except the last is nonhalting; each adjacent pair satisfies [[def-one-step-configuration-relation]]; and the last entry is in state $1$ or $2$ with canonical numeric output. The output word is the maximal initial tape segment whose letters lie in $\{1,2\}$, converted back to bits. It is canonical iff it is the single bit $0$ or starts with $1$. The empty output is invalid, not the numeral zero. The last state being accept or reject does not change the numeric output convention.

The total function $U(z)$ reads the last entry of the history as a triple, reads the initial bit segment of its tape list, and returns that numeral's value if it is canonical. If $z$ is empty, its last entry is not a triple with a nonempty tape list, or the output is not canonical, return zero. This syntactic function does not need a program parameter or claim the history is valid. The following lemma proves that $T_k$ and $U$ are PR; that fact is not assumed in this definition.

Write $\varphi_e^{(k)}(\mathbf a)$ for the numerical output if the actual run halts with canonical output, and leave it undefined otherwise. For $k=1$ omit the superscript. A malformed program or invalid terminal output can be implemented as genuine divergence: a wrapper rejects its syntax into an endless rightward blank walk, and after simulating a halt enters the same loop if the terminal numeral is invalid. Thus this convention represents partial functions in the sense of [[def-partial-function-computed-by-a-machine]], not a third numeric value for failure. The wrapper is an interpretation of an index; it does not change its raw word or assert that its original run diverges.
