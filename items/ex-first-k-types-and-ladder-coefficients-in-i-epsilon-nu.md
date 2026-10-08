---
id: ex-first-k-types-and-ladder-coefficients-in-i-epsilon-nu
kind: example
title: First K-types and ladder coefficients in I(epsilon, nu)
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 5
deps:
  - def-normalized-principal-series-i-epsilon-nu
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - lem-sl2-raising-and-lowering-formulas-in-the-compact-picture
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, formula (2.6), printed pp. 10–11"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.1, formulas (4)–(5), printed pp. 48–49, and §9.2 right-P model, printed p. 50; the left-action parameter convention is paired locally"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Tabulate the $K$-types $f_{-3},\dots,f_3$ of $I_{0,\nu}$ and of $I_{1,\nu}$ and the values of the raising and lowering operators $L_{E_\pm}f_n=\frac{1+\nu\pm n}{2}f_{n\pm2}$ on them, and check that for $\nu=n\in\mathcal W_\varepsilon$ the coefficient at the expected $K$-type vanishes.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, $\nu\in\mathbb C$, and the K-type decomposition and ladder operators.

[F1] $f_n(k_\theta)=e^{in\theta}$ is a K-type exactly for $n\equiv\varepsilon\pmod2$, and these are all K-types ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F2] $L_Wf_n=nf_n$ and $L_{E_\pm}f_n=\frac{1+\nu\pm n}{2}f_{n\pm2}$, with $L_{E_-}f_n=0$ exactly when $\nu=n-1$ and $L_{E_+}f_n=0$ exactly when $\nu=-(n+1)$ ([[lem-sl2-raising-and-lowering-formulas-in-the-compact-picture]]).

[F3] $\mathcal W_0$ is the odd integers and $\mathcal W_1$ is the even integers ([[def-normalized-principal-series-i-epsilon-nu]]).

[A1] AC is inherited through the principal-series and ladder suppliers; this explicit tabulation uses no additional choice ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** substitute each parity-allowed weight into [F2].

For the K-types in the requested range, the table is:

| $\varepsilon$ | $n$ | $L_Wf_n$ | $L_{E_+}f_n$ | $L_{E_-}f_n$ |
|---:|---:|---|---|---|
| $0$ | $-2$ | $-2f_{-2}$ | $\frac{\nu-1}{2}f_0$ | $\frac{\nu+3}{2}f_{-4}$ |
| $0$ | $0$ | $0$ | $\frac{1+\nu}{2}f_2$ | $\frac{1+\nu}{2}f_{-2}$ |
| $0$ | $2$ | $2f_2$ | $\frac{\nu+3}{2}f_4$ | $\frac{\nu-1}{2}f_0$ |
| $1$ | $-3$ | $-3f_{-3}$ | $\frac{\nu-2}{2}f_{-1}$ | $\frac{\nu+4}{2}f_{-5}$ |
| $1$ | $-1$ | $-f_{-1}$ | $\frac{\nu}{2}f_1$ | $\frac{\nu+2}{2}f_{-3}$ |
| $1$ | $1$ | $f_1$ | $\frac{\nu+2}{2}f_3$ | $\frac{\nu}{2}f_{-1}$ |
| $1$ | $3$ | $3f_3$ | $\frac{\nu+4}{2}f_5$ | $\frac{\nu-2}{2}f_1$ |

1.1 For $\varepsilon=0$, the only indices in $\{-3,-2,\ldots,3\}$ with the required parity are $-2,0,2$; for $\varepsilon=1$ they are $-3,-1,1,3$. Applying the three formulas in [F2] to these indices gives every entry of the table, and [F1] shows that the table omits no K-type in the requested range. [F1, F2, A1, algebra]

2.1 Let $m\in\mathcal W_\varepsilon$ with $m\ge0$; $m=0$ occurs only for odd parity. At $\nu=m$, [F2] gives $L_{E_-}f_{m+1}=0$ and $L_{E_+}f_{-m-1}=0$, since their coefficients are respectively $(1+m-(m+1))/2$ and $(1+m+(-m-1))/2$. At $\nu=-m$, it gives $L_{E_-}f_{1-m}=0$ and $L_{E_+}f_{m-1}=0$, since both coefficients are zero. When $m=0$, these parameter cases coincide and the table shows $L_{E_-}f_1=L_{E_+}f_{-1}=0$ at $\varepsilon=1,\nu=0$. For the other exceptional values visible in the table, $m=1$ in even parity and $m=2$ in odd parity: the positive parameter zeros occur at $f_{\pm2}$ and $f_{\pm3}$, respectively, and the negative parameter zeros occur at $f_0$ and $f_{\pm1}$. These are exactly the boundary arrows expected from the exceptional K-type strings; no parity class is identified with the other. [F2, F3, step 1.1, algebra] ∎

## Remarks

Kerr's formula (2.6) gives the same raising and lowering coefficients in the
right-translation basis used here. Etingof's §9.1 formulas (4)–(5) use an
abstractly normalized weight basis, so they serve as a convention check rather
than a literal coefficient-by-coefficient table source. The table above is
computed directly from the local ladder formulas.
