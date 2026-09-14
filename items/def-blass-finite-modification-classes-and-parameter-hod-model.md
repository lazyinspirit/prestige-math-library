---
id: def-blass-finite-modification-classes-and-parameter-hod-model
kind: definition
title: Blass's finite-modification classes and parameter-HOD model
status: draft
origin: pipeline
deps: [def-ordinal-definability-and-hod, thm-hod-is-an-inner-model-containing-l, def-set-difference-and-symmetric-difference, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Eleftherios Tachtsis, On the Existence of Free Ultrafilters on omega and on Russell-sets in ZF, Theorem 4 construction, printed pp. 5–7", url: "https://www.impan.pl/shop/publication/transaction/download/product/91097"}
    - {title: "A. Blass, A model without ultrafilters, Bull. Acad. Polon. Sci. 25 (1977), 329–331; bibliographic record", url: "https://zbmath.org/?q=an:0365.02054"}
---

## Definition

Work in the metatheory with a countable transitive
$M\models\mathrm{ZF}+V=L$. Thus $M$ satisfies Choice by the canonical
constructible well-order, and this is the only ambient source of Choice in the
setup. Force over $M$ with

$$P=\operatorname{Fn}(\omega\times\omega,2),$$

the finite partial functions ordered by reverse inclusion. If $G$ is
$M$-generic, define the mutually Cohen-generic reals

$$a_n=\{k<\omega:(\bigcup G)(n,k)=1\}\qquad(n<\omega).$$

For any real $x\subseteq\omega$, its **finite-modification class** is

$$\delta(x)=\{y\subseteq\omega:x\mathbin\triangle y\text{ is finite}\},$$

where $\mathbin\triangle$ is the symmetric difference of
[[def-set-difference-and-symmetric-difference]]. Put

$$f(n)=\{\delta(a_n),\delta(\omega\setminus a_n)\}$$

and

$$S=\bigcup_{n<\omega}\bigl(\delta(a_n)\cup\delta(\omega\setminus a_n)\bigr)\cup\{f\}.$$

Blass's class $N$ consists of all $x\in M[G]$ such that every member of
$\operatorname{TC}(\{x\})$ is uniquely definable in $M[G]$ from $f$, finitely
many members of $S\setminus\{f\}$, and finitely many ordinal parameters. This
is the convention denoted $\operatorname{HOD}(S)$, or “HOD over $S$,” in the
source. It is important that $S$ acts as a reservoir of finitely many
parameters, not as one pointwise named parameter: $S$ is definable from the
single permitted parameter $f$, while individual definitions may also use
only finitely many reals from its displayed union.

The range

$$R=\operatorname{ran}(f)=\bigl\{\{\delta(a_n),\delta(\omega\setminus a_n)\}:n<\omega\bigr\}$$

is therefore a canonically enumerated family of pairs in $N$. The later term
**Blass model** refers to this parameter-HOD class $N$. The ordinary HOD
coding convention is that of [[def-ordinal-definability-and-hod]]; the usual
HOD inner-model proof from [[thm-hod-is-an-inner-model-containing-l]] must be
relativized to this finite-parameter reservoir before any ZF conclusion about
$N$ is used.
