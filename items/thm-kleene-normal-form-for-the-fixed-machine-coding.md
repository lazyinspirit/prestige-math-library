---
id: "thm-kleene-normal-form-for-the-fixed-machine-coding"
kind: "theorem"
title: "Kleene normal form for the fixed machine coding"
status: published
origin: "pipeline"
deps: ["lem-fixed-machine-history-predicate-is-primitive-recursive", "def-primitive-recursive-functions-by-initial-functions-and-schemes", "lem-step-by-step-interpreter-for-machine-codes"]
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
    - title: "Gallier §2.3, Proposition 2.5 and §1.9; machine-specific proof supplied locally"
      url: https://www.cis.upenn.edu/~cis5110/notes/tcbook-comp.pdf
proof_strategy: "direct"
---

## Statement

For each fixed positive arity $k$, the numerical partial function of program index $e$ has normal form
$$\varphi_e^{(k)}(\mathbf a)=U(\mu z\,T_k(e,\mathbf a,z)).$$
The right side is undefined when there is no witness. The partial recursive functions are the smallest arity-indexed class containing the initial functions and closed under composition, primitive recursion and unbounded minimization, with partial evaluations performed strictly. In particular $\mu y\,g(\mathbf a,y)$ is defined with value $z$ exactly when $g(\mathbf a,j)$ is defined and nonzero for every $j<z$, and $g(\mathbf a,z)=0$. This class is exactly the numerical partial functions computed by Turing machines under the fixed encodings.

## Facts & Assumptions

**Given:** The fixed numeric program, tuple and output conventions. For a predicate, $\mu z\,T(z)$ means the least true witness, equivalently minimization of $1-[T(z)]$.

[F1] The total functions $T_k,U$ are PR, recognize precisely first-halting canonical-output computations and give the same output on every witness ([[lem-fixed-machine-history-predicate-is-primitive-recursive]]).

[F2] The initial functions, composition and primitive-recursion equations are specified with nullary parameter tuples allowed ([[def-primitive-recursive-functions-by-initial-functions-and-schemes]]).

[F3] A fixed one-tape interpreter executes one coded step and returns the unique successor on a valid nonhalting configuration ([[lem-step-by-step-interpreter-for-machine-codes]]).

## Proof

1.1 Since $T_k$ is a total Boolean predicate, test $z=0,1,2,\ldots$ in order. If some witness exists this search reaches the least one after finitely many terminating tests; if none exists it never terminates. F1 then gives exactly the numerical function and domain of $\varphi_e^{(k)}$. Since PR functions belong to the partial recursive class, composition of U with minimization of $1-[T_k]$ is partial recursive. Thus every machine function belongs to that class. [F1, given]

1.2 Here are finite tape routines for the converse. Store finitely many finite words in delimited zones, with marked versions of each symbol. To copy a zone, find its next unmarked symbol by a left-to-right sweep, mark it, carry that symbol in the finite control to the destination delimiter, append it, and return to the source; after its end delimiter is reached, unmark the source. To insert room, scan to the last occupied delimiter and shift the suffix right by one cell, working from right to left while carrying one symbol. Erasing and testing an empty zone are sweeps to its delimiter. Binary increment scans rightward to the last digit, changes trailing ones to zero and the preceding zero to one, inserting a leading one if necessary. Zero testing compares with the one-letter zero word. Each sweep terminates on a finite zone; its cases concern a finite alphabet, so each description expands to finitely many states and transitions. Distinct control-state tags prevent interference. A left-edge flag prevents a sweep going below zero. If a routine uses a stationary move, store logical cells at even physical positions: a stationary action is right-left, a right move is right-right and a left move is left-left, with right-left for a clamped left move at zero. Delay a requested halt to the end of the two-transition action. This gives the stipulated left/right-only one-tape model. [given]

2.1 Parse and copy the tuple inputs by these routines. Zero writes the single zero numeral, successor applies binary increment, and a projection copies its designated input numeral. For a composition $h(g_1(\mathbf a),\ldots,g_r(\mathbf a))$, keep the original tuple, run the $g_i$ sequentially on copies, save each canonical result, form their tuple and run $h$. To invoke a compiled machine without allowing its tape to destroy stored arguments, simulate its finite configuration in a separate zone using F3, retaining the calling zones outside that encoded tape. Copy its final output back only after a valid numeric halt; on invalid output or malformed code enter an endless rightward walk. Interpreter code and finite program constants can be inserted with renamed states and finite literal-writing chains. All required subcalls terminate exactly when their represented functions are defined. Thus the composition is strict in every inner argument, including when the outer function happens to ignore an argument. [step 1.2, F2, F3]

3.1 For primitive recursion, retain $\mathbf a$ and the target $y$. Run $g(\mathbf a)$, then for $j=0,\ldots,y-1$ run $h(\mathbf a,j,z)$ where $z$ is the previous result, increment $j$ and replace $z$. At $y=0$ there are no calls to h. If any required call diverges, the entire computation diverges. Otherwise the loop makes exactly $y$ calls and its successive stored values satisfy the recursion equations, so it computes their strict partial interpretation. Nullary g is a constant routine on the empty stored argument list; it needs no arity-zero numeric evaluator. [step 1.2, step 2.1, F2]

4.1 For minimization, start $j=0$, run the compiled $g(\mathbf a,j)$, output j on zero, and increment and repeat on nonzero. An undefined call blocks forever; it is not bypassed by dovetailing. Consequently termination at z occurs exactly under the minimization condition in the Statement. Each finite derivation of a partial recursive function now produces a finite program: process its tree from leaves to root using the preceding compilation constructions. The process is effective, since renaming a finite list of states, writing a literal constant, combining finite tables and encoding a table are finite scans with the explicit routines of step 1.2. [step 1.2, step 2.1, step 3.1, given]

5.1 The programs thus built erase scratch, write the canonical output at the left edge, and halt only on a defined value; the internal simulation keeps scratch outside each simulated tape. They therefore compute the represented partial functions with precisely the required domains. Conversely step 1.1 covers every valid machine and assigns the empty domain to malformed or invalid-output indices. This proves the normal form and both inclusions of classes, including functions undefined everywhere. No complexity bound on the compiler or search is asserted. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
