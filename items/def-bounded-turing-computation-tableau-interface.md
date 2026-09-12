---
id: "def-bounded-turing-computation-tableau-interface"
kind: "definition"
title: "Bounded Turing-computation tableaux"
status: "draft"
origin: "pipeline"
deps: ["def-boolean-formulas-cnf-and-satisfiability-interface", "def-polynomial-time-verifier-and-reduction-interface", "def-turing-machine-configuration", "def-one-step-configuration-relation", "def-turing-machine-initial-and-halting-configuration-interface", "thm-multitape-machines-have-one-tape-simulations", "lem-multitape-simulation-has-quadratic-time-overhead"]
justified_by: []
landmark: false
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, \u00a72.3.2"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
---

## Definition

Use the syntax of [[def-boolean-formulas-cnf-and-satisfiability-interface]]. Fix a polynomial-time deterministic multitape verifier with certificates of one fixed length $p(n)$. If its original certificates have variable guarded length, first use the length-field construction in [[def-polynomial-time-verifier-and-reduction-interface]]; a verifier already using fixed-length certificates needs no such conversion. In particular a fixed empty certificate is permitted. Its ordinary binary input is $w=1^n0xz$, where $|x|=n$ and $|z|=p(n)$; verification checks the certificate's length-field syntax. Apply [[thm-multitape-machines-have-one-tape-simulations]] to this fixed verifier. The bound in [[lem-multitape-simulation-has-quadratic-time-overhead]] gives an integer polynomial upper bound $T(n)\ge 2n+1+p(n)+1$ for the resulting one-tape running time. Enlarge its constant for short inputs. Thus the complete input length $\ell=2n+1+p(n)$ is less than $T(n)$.

Write $T=T(n)$ and $W=T+2$. Rows are indexed $0,\ldots,T$ and cells $0,\ldots,W-1$. This is the bounded $T$-by-$T$ construction up to the necessary additive endpoint cells. Its augmented alphabet is $A=\Gamma\sqcup(Q\times\Gamma)$: a marked symbol $(q,a)$ means the unique head scans symbol $a$ in state $q$. Configurations and initial/halting predicates are those of [[def-turing-machine-configuration]] and [[def-turing-machine-initial-and-halting-configuration-interface]].

For tableaux only, extend the ordinary step relation of [[def-one-step-configuration-relation]] by leaving every halting configuration unchanged. In particular acceptance is a stationary absorbing sink. This padding relation does not give the original halted machine an extra physical transition. Unpadding means delete the repeated halting rows. A valid row has exactly one marked symbol and a blank, unmarked last cell. Since a head starts at zero, at time $t\le T$ it is at most $T$; the extra cell $T+1$ is never reached.

Here is a fully specified finite local rule. For an interior cell, inspect its old left, centre and right symbols. If the centre has a nonhalting head, write the symbol prescribed by the transition; retain the new head there only for a left move at cell zero. Otherwise retain the old underlying centre symbol. Put the new state/head at the centre if the old head in the left neighbour moves right or the old head in the right neighbour moves left. A halting head stays in place with unchanged symbol and state. At cell zero replace the absent left neighbour by a fixed exterior marker and clamp a left move there. At the last cell use a fixed exterior right marker; attempts to move out are forbidden. Windows with multiple heads, conflicting arrivals, or a head on an exterior marker are forbidden. All other windows have the output prescribed above. This defines a finite allowed relation $R_j(a,b,c,d)$ on the three old symbols and the new centre symbol; only the two boundary versions depend on $j$.

For each $t,j,a$ introduce $X_{t,j,a}$. Require at least one and at most one symbol per cell by $\bigvee_{a\in A}X_{t,j,a}$ and $\neg X_{t,j,a}\vee\neg X_{t,j,b}$ for $a\ne b$. In row zero pin the fixed bits of $1^n0x$, leave each certificate position restricted to the two unmarked bit symbols, put state $q_0$ at cell zero, and pin all remaining cells blank. Row zero therefore has exactly one head even for $n=0$. For every row pin cell $W-1$ to unmarked blank. For each $t<T$, each cell, and each forbidden tuple $(a,b,c,d)$ add the clause $\neg X_{t,j-1,a}\vee\neg X_{t,j,b}\vee\neg X_{t,j+1,c}\vee\neg X_{t+1,j,d}$. At boundaries omit exterior literals and enumerate only the fixed exterior symbol. Finally add $\bigvee_{j,a}X_{T,j,(q_{\mathrm{acc}},a)}$. Their conjunction is $\Phi_{M,x}$. Fresh variable indices enumerate the triples lexicographically. No global head-uniqueness clause is needed after the initial row: correctness of the local rule on genuine rows supplies that invariant in the next lemma.
