---
id: "cex-constant-sheaf-not-flasque"
kind: "counterexample"
title: "The constant sheaf of integers on the line is not flasque"
status: published
origin: pipeline
deps: [def-flasque-sheaf, def-sheaf-on-topological-space, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, def-open-and-closed-in-r, def-topological-space, def-interval, cor-connected-subsets-of-the-line, def-connected-space, ex-flasque-sheaf-all-functions]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
verification:
  audited: 2026-09-27
---

## Statement refuted

Let $X=\mathbb R$ carry its usual topology and let
$\underline{\mathbb Z}$ be the constant sheaf with value $\mathbb Z$ on
$\mathbb R$, identified with the sheaf of locally constant $\mathbb Z$-valued
functions ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).
Then $\underline{\mathbb Z}$ is not flasque
([[def-flasque-sheaf]]). The witness is the open set
$$U:=(-2,-1)\cup(1,2)\subseteq\mathbb R,$$
whose two parts are open intervals, together with the section $s\in
\underline{\mathbb Z}(U)$ that equals $0$ on $(-2,-1)$ and $1$ on $(1,2)$: the
restriction map $\underline{\mathbb Z}(\mathbb R)\to\underline{\mathbb Z}(U)$ is
not surjective, because every global locally constant $\mathbb Z$-valued
function on the connected space $\mathbb R$ is constant, while $s$ takes two
distinct values. The section $s$ does extend to a global *function* on
$\mathbb R$; it is the locally constant requirement that fails, and the sheaf of
all functions on $\mathbb R$ is flasque
([[ex-flasque-sheaf-all-functions]]).

## Facts & Assumptions

[F1] A sheaf of abelian groups $\mathcal F$ is flasque when all of its restriction maps $\rho^V_U:\mathcal F(V)\to\mathcal F(U)$, $U\subseteq V$ open, are surjective ([[def-flasque-sheaf]]).

[F2] A function $f:U\to A$ on an open $U\subseteq X$ is locally constant when every $x\in U$ has an open neighbourhood $V\subseteq U$ with $x\in V$ on which $f$ is constant ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F3] The constant sheaf with value $A$ is canonically isomorphic to the sheaf of locally constant $A$-valued functions ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F4] In the usual topology of the line each of the four open interval forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)=\mathbb R$ is an open set, and $\varnothing$ and $\mathbb R$ are clopen ([[def-open-and-closed-in-r]], [[def-interval]]).

[F5] Arbitrary unions of open sets of a topological space are open, and the usual topology of $\mathbb R$ is the metric topology of $|s-t|$ ([[def-topological-space]], [[cor-connected-subsets-of-the-line]]).

[F6] $\mathbb R=(-\infty,\infty)$ is one of the nine interval forms and therefore a connected subset of $\mathbb R$ ([[cor-connected-subsets-of-the-line]], [[def-interval]]).

[F7] A separation of a space $X$ is an ordered pair of open, nonempty, disjoint subsets with union $X$, and $X$ is connected when no separation exists ([[def-connected-space]]).

## Counterexample

**Given:** The real line $\mathbb R$ with its usual topology, the constant sheaf $\underline{\mathbb Z}$ with value $\mathbb Z$ on it, the open set $U=(-2,-1)\cup(1,2)$ with parts $A:=(-2,-1)$ and $B:=(1,2)$, and the function $s:U\to\mathbb Z$ equal to $0$ on $A$ and to $1$ on $B$.

**Proof technique:** direct.

1.1 $A=(-2,-1)$ and $B=(1,2)$ are open interval forms of the line, so by [F4] each is an open subset of $\mathbb R$; by the union axiom for open sets [F5] their union $U=A\cup B$ is open as well, and $U\ne\mathbb R$ since $0\in\mathbb R\setminus U$. The two sets are nonempty, disjoint, and $U=A\cup B$; both are open in the subspace $U$ as well, being traces of open sets of $\mathbb R$. [F4, F5]

2.1 Because $A\cap B=\varnothing$ and $U=A\cup B$, the rule that assigns $0$ to every point of $A$ and $1$ to every point of $B$ defines a function $s:U\to\mathbb Z$. It is locally constant in the sense of [F2]: a point of $A$ has the open neighbourhood $A$ inside $U$, on which $s$ is constantly $0$, and a point of $B$ has the open neighbourhood $B$, on which $s$ is constantly $1$. By [F3] the locally constant $\mathbb Z$-valued functions on $U$ are the sections of $\underline{\mathbb Z}$ over $U$, so $s\in\underline{\mathbb Z}(U)$. [F2, F3, step 1.1]

3.1 Suppose that $t\in\underline{\mathbb Z}(\mathbb R)$ restricts to $s$, that is, $t|_U=s$. By [F3] the element $t$ is a locally constant $\mathbb Z$-valued function on $\mathbb R$. Every such function is constant: its fibres $t^{-1}(n)$, $n\in\mathbb Z$, are open by local constancy [F2], pairwise disjoint, and cover $\mathbb R$, so if two distinct fibres were nonempty, one of them and the union of all the other fibres would be nonempty disjoint open sets covering $\mathbb R$, hence would form a separation [F7], which is impossible because $\mathbb R=(-\infty,\infty)$ is connected [F6]. Hence $t\equiv n$ for some $n\in\mathbb Z$. Restricting to the nonempty sets $A$ and $B$ of [step 1.1] gives $n=t|_A=s|_A=0$ and $n=t|_B=s|_B=1$, so $0=1$, a contradiction. Therefore no global section restricts to $s$. [F2, F3, F6, F7, step 1.1, step 2.1]

4.1 By [step 2.1] the element $s$ lies in $\underline{\mathbb Z}(U)$, and by [step 3.1] it has no preimage under the restriction map $\underline{\mathbb Z}(\mathbb R)\to\underline{\mathbb Z}(U)$. That map is therefore not surjective, and since a sheaf is flasque exactly when all of its restriction maps are surjective [F1], the constant sheaf $\underline{\mathbb Z}$ on $\mathbb R$ is not flasque. The section $s$ itself is the witness: it takes the two distinct values $0$ and $1$ on the two components $A$ and $B$ of $U$, and a global locally constant function on the connected line has only one value. Note that $s$ does extend to the global function equal to $0$ on $A$, $1$ on $B$, and, say, $0$ on $\mathbb R\setminus U$; that function is not locally constant, and correspondingly the sheaf of all functions on $\mathbb R$ is flasque ([[ex-flasque-sheaf-all-functions]]), so the failure is exactly the locally constant requirement and not the extension of functions. No choice principle is used: the sets and the section are given by explicit formulas. ∎ [F1, step 3.1, step 2.1]
