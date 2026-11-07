---
id: thm-kim-symmetric-square-l-function-analytic-continuation-and-functional-equation
kind: theorem
title: Kim Analytic Continuation and Functional Equation for Twisted Symmetric-Square L-Functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - lem-symmetric-power-scalar-twist-and-local-factor-shift
  - def-dirichlet-character-modulo-q
  - def-symmetric-square-l-function-for-gln
  - thm-kim-holomorphy-symmetric-square-l-function-for-nonselfdual-cuspidal-gln
  - thm-shahidi-symmetric-square-l-functional-equation-for-gln
proof_strategy: twisting-and-functional-equation
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "H. H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "Appendix 2, Proposition 3 and equations (1)–(2), printed pp. 176–177: twist identity, exceptional self-dual twists, and the unchanged archimedean factor."
    - title: "F. Shahidi, On the Ramanujan conjecture and finiteness of poles for certain L-functions"
      url: "https://www.math.purdue.edu/~fshahidi/articles/Shahidi%20%5B1988%2C%2038pp%5D---On%20the%20Ramanujan%20conjecture%20and%20finiteness%20of%20poles%20for%20certain%20L-functions.pdf"
      locator: "Theorem 6.1, printed p. 576: functional equation for the Langlands–Shahidi symmetric-square factor."
---

## Statement

Let $\pi_0$ be a positive-real-center-normalized unitary cuspidal globally
generic representation of $\mathrm{GL}_n(\mathbb A_{\mathbb Q})$, and let
$\pi=\pi_0\otimes|\det|^{it}$, $t\in\mathbb R$. For a prime $q$ and a
Dirichlet character $\chi$ modulo $q$, the standard parameter factors satisfy
$$
L(s,\pi\otimes\chi,\operatorname{Sym}^2) =L(s+2it,\pi_0,\operatorname{Sym}^2\otimes\chi^2).
$$
The analogous identity holds for completed factors. If
$\pi_0\otimes\chi\not\simeq\widetilde{\pi_0\otimes\chi}$, this completed
function is entire and satisfies the symmetric-square functional equation.
For the other twists the meromorphic-continuation and functional-equation
target is retained, without asserting entireness.

For fixed $\pi_0$, if $q$ is unramified for $\pi_0$ (hence for every sufficiently
large prime $q$), at most two characters modulo $q$ fail that normalized
non-self-duality hypothesis. At ramified primes retain the exact exceptional
set
$$
E_q(\pi_0)=\{\chi\bmod q:\pi_0\otimes\chi\simeq \widetilde{\pi_0\otimes\chi}\};
$$
no universal two-character bound is asserted there. Its determination is a
separate unresolved input.

## Statement references

[H. H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

[F. Shahidi, *On the Ramanujan conjecture and finiteness of poles for certain L-functions*](https://www.math.purdue.edu/~fshahidi/articles/Shahidi%20%5B1988%2C%2038pp%5D---On%20the%20Ramanujan%20conjecture%20and%20finiteness%20of%20poles%20for%20certain%20L-functions.pdf)

## Proof status

Appendix 2 immediately before equation (1) fixes a prime $q$ that is large and
then lets $q\to\infty$; the previous universal-prime wording omitted that
source restriction. At an unramified prime the local self-duality comparison
forces the inertia character $\chi^2$ to be trivial, leaving at most the two
quadratic characters modulo a prime. This reduction still needs the exact
local parameter/automorphic compatibility proof. At ramified primes the
self-twist condition cannot be removed by that unramified argument.

The scalar-parameter identity has a complete algebraic helper; compatibility
at every automorphic place, global continuation, entireness for the normalized
non-self-dual branch and the functional equation remain unsupplied. The
normalization counterexample in the holomorphy supplier applies to the old
unnormalized formulation here as well. No deep theorem or finite computation
is imported by this repair.
