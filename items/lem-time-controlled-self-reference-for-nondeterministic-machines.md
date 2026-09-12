---
id: "lem-time-controlled-self-reference-for-nondeterministic-machines"
kind: "lemma"
title: "Time-controlled self-reference for nondeterministic machines"
status: "draft"
origin: "pipeline"
deps: ["lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation", "thm-smn-for-the-fixed-acceptable-numbering", "thm-kleene-fixed-point-theorem-for-program-indices"]
justified_by: []
landmark: false
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Seiferas, Fischer, and Meyer, Lemma 6, p. 152"
      url: https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes
proof_strategy: "direct"
---

## Statement

Let $h$ be a total effective compiler mapping valid two-tape prefix codes $e$ to codes for nondeterministic two-tape acceptors $H_e$. One can effectively construct a valid code $e_0$ with $L(M_{e_0})=L(H_{e_0})$ and constants $C,D$, fixed for this construction, such that
$$\tau_{M_{e_0}}(x)\le C(|x|+\tau_{H_{e_0}}(x))+D$$
on accepted inputs. This is extensional language equality, not code equality. In particular for any fixed two-tape acceptor A, one obtains $e_0$ with $L(M_{e_0})=\{x:e_0x\in L(A)\}$ and $\tau_{M_{e_0}}(x)\le C(|x|+\tau_A(e_0x))+D$.

## Facts & Assumptions

**Given:** A total compiler h on valid prefix codes, with the concrete finite syntax fixed below.

[F1] Prefix tables can be effectively encoded/decoded, and one fixed two-tape interpreter has linear shortest-time overhead for each fixed target code ([[lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation]]).

[F2] Specialization by literal parameter compilation is effective; the published s-m-n theorem asserts extensional equality, without a time estimate ([[thm-smn-for-the-fixed-acceptable-numbering]]).

[F3] The published fixed-point theorem likewise asserts equality of partial functions, not a time or code equality ([[thm-kleene-fixed-point-theorem-for-program-indices]]).

## Proof

1.1 Define an explicit compiler f on valid two-tape codes d. Its output describes a machine which, on x on tape one and blank tape two, writes literal d on tape two, returns that head to zero, then executes the table described by d from its start state, with that nonblank second tape. The extra states are finite literal-writing and return chains. Tape one is preserved; a stay can be replaced by a right/left excursion, including at zero. Finally encode the whole finite table with F1's code scheme. This is effective specialization in the sense of F2, here implemented directly in the target syntax rather than through a semantic recognizer. Code-padding computation is allowed to be slow: f is only required to halt. [F1, F2, construct]

2.1 Construct a two-tape program Q which expects x on tape one and a valid d on tape two. It first computes $e=f(d)$ and $h(e)$, both terminating. It then arranges $h(e)x$ on tape one with all other tracks blank and runs the fixed interpreter of F1. These operations are effective two-tape algorithms: finite computation on d can use scratch tracks on the two tapes while preserving an input track for x; after computing the finite prefix, shift x right by its length with a reverse scan, write the prefix, and erase scratch tracks. Any temporary stay is replaced by the same two-move macro. Let q be the code of this finite Q table and put $e_0=f(q)$. Both q and $e_0$ are obtained by finite code generation. [F1, step 1.1]

3.1 On ordinary input x, $M_{e_0}$ first writes q on tape two and then runs Q. Q consequently computes $f(q)=e_0$ and then $h(e_0)$, and interprets precisely $H_{e_0}$ on x. The compiler calculations terminate independently of whether that acceptor has a branch which halts. F1 gives language equality in both directions, including when the language is empty. This proves the desired fixed point directly; F3's extensional theorem alone would not provide the quantitative assertion below. [F1, F3, step 2.1]

4.1 All computation on q, $f(q)$ and $h(f(q))$ now concerns fixed finite strings, so takes a fixed number of steps and uses a fixed finite amount of scratch space, independent of x. Preserving and shifting x for the final fixed prefix costs at most $A(|x|+1)$ for a fixed A. F1 bounds the interpreter run by $B(|x|+\tau_{H_{e_0}}(x))+E$, where B and E depend only on the fixed target code $h(e_0)$. Add these costs to obtain C,D as stated. No deterministic dovetailing of branches occurs, so no exponential search has been concealed in C. [F1, step 2.1, step 3.1]

5.1 For the final specialization let $H_e$ be the finite program which prepends literal e to its input and directly runs A. This compiler is total and its per-e preprocessing is $O_e(|x|+1)$ on semi-infinite tapes; hence $\tau_{H_e}(x)\le A_e(|x|+1)+\tau_A(ex)$. Insert this estimate in step 4.1. Empty x still permits the literal-prefix writing; zero accepting time is neither needed nor manufactured. All parameters and constants are fixed by explicit compilation, with no AC. [step 1.1, step 4.1] ∎
