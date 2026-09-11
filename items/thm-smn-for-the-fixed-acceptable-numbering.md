---
id: "thm-smn-for-the-fixed-acceptable-numbering"
kind: "theorem"
title: "Smn for the fixed acceptable numbering"
status: "draft"
origin: "pipeline"
deps: ["def-acceptable-numbering-with-universal-evaluation", "lem-fixed-coding-primitive-recursive-arithmetic-and-sequences"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Gallier Theorem 3.1 and its complete composition argument, pp.68–69 of recovery edition"
      url: https://www.cis.upenn.edu/~cis5110/notes/tcbook-comp.pdf
proof_strategy: "direct"
---

## Statement

For all positive $m,n$ there is a total computable specialization function $s_m^n$ such that
$$\varphi_{s_m^n(e,a_1,\ldots,a_m)}^{(n)}(y_1,\ldots,y_n)\simeq\varphi_e^{(m+n)}(a_1,\ldots,a_m,y_1,\ldots,y_n).$$
The compiler is uniform in the positive arities and the finite parameter tuple. Equality includes domains, not only values when both sides happen to halt.

## Facts & Assumptions

**Given:** Valid positive arities and canonical numerical parameters; e can be any index.

[F1] A fixed raw evaluator and effective literal finite-table compilation are supplied by the acceptable-numbering interface ([[def-acceptable-numbering-with-universal-evaluation]]).

[F2] Canonical numeral conversion and finite-list concatenation/parsing are computable by the PR operations ([[lem-fixed-coding-primitive-recursive-arithmetic-and-sequences]]).

## Proof

1.1 Generate the following finite program. Parse its input as exactly an n-entry tuple of canonical numerals, entering an endless walk on failure. Retain those entries, write the literal canonical numerals $a_1,\ldots,a_m$ into new zones, and form the tuple with arity header $1^{m+n}0$, the m parameter blocks and the n retained input blocks. Each word block w is written as $1^{|w|}0w$. Run the raw evaluator on program e and that tuple word, with canonical output normalization. F1 implements the evaluator and the literal-writing chains; F2 implements the parser and tuple construction. Encode the resulting finite table and return its length-lex index. This defines $s_m^n$. [F1, F2, given]

2.1 Code generation does not execute e. It scans only the finite arities, parameter numerals and fixed evaluator template, expanding each literal into a finite writing-state chain. It therefore halts for every allowed input, even when e is malformed or represents a divergent function. A single generator handles all m,n by loops over their finite numerals and parameter list. On malformed generator inputs it may return a fixed index; the stated compiler uses only the valid ones. [step 1.1, F1, F2]

3.1 On the tuple for $\mathbf y$, the generated parser succeeds and supplies exactly $E(\operatorname{bin}(\mathbf a),\operatorname{bin}(\mathbf y))$ to the raw e-evaluator. Every preprocessing operation terminates. Thus its subsequent run has exactly the canonical output of that evaluation or diverges exactly when that evaluation is undefined. This proves the displayed equality of domains and values, including zero parameters, zero-valued inputs, malformed e and empty partial domains. For m=n=1 the construction simply prepends one stored numeral and changes the arity header to two. [step 1.1, step 2.1, F1] ∎
