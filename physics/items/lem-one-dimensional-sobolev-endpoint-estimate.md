---
id: lem-one-dimensional-sobolev-endpoint-estimate
kind: lemma
title: "The one-dimensional endpoint estimate on a bounded interval"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-sobolev-space-wkp-and-its-norm, thm-holder-inequality-for-integrals, def-axiom-of-choice, thm-acl-characterisation-of-w-one-p]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-4.md"
      - "research/frontier-38-owner-30-alpha-batch-4-5a.md"
      - "research/frontier-38-owner-30-step5-hash-4-post-5a.json"
    content_sha256: "4ed684eee84e2f4e1deb2ef2ecde7143f7bdfa4979107a1016794f4e35c934be"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Theorem 3.14 proof, Step 1, printed p. 63: the one-variable fundamental-theorem argument in the normal direction."
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3, proof of Theorem 3.44, printed p. 72: the inequality $|f(x',0)|^p\\le p\\int_0^\\infty|f|^{p-1}|\\partial_nf|$, whose one-dimensional core is this estimate."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, Lemma 9.21 proof, printed p. 210: the normal-line fundamental-theorem step."
---

## Statement

Assume the Axiom of Choice through the ACL interface of
[[thm-acl-characterisation-of-w-one-p]]. Let $I=(a,b)$ be a bounded open
interval, $1\le p<\infty$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let
$u\in W^{1,p}(I;\mathbb K)$ have weak derivative $u'$ and unique absolutely
continuous representative $u^*$
([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).
Then for every $0<\varepsilon<b-a$:

(i) if $1<p<\infty$,
$$|u^*(a)|^p\le2^{p-1}\Bigl(\varepsilon^{-1}\int_a^{a+\varepsilon}|u^*|^p+\varepsilon^{p-1}\int_a^{a+\varepsilon}|u'|^p\Bigr),$$
and the same inequality holds at $b$ with $(b-\varepsilon,b)$ in place of
$(a,a+\varepsilon)$;

(ii) if $p=1$,
$$|u^*(a)|\le\varepsilon^{-1}\int_a^{a+\varepsilon}|u^*|+\int_a^{a+\varepsilon}|u'|,$$
and likewise at $b$.

The endpoint values are those of the absolutely continuous representative and
do not depend on the chosen representative of the class. In the form used by
the half-space estimates, multiplying by $\varepsilon$ gives
$$\varepsilon\,|u^*(a)|^p\le2^{p-1}\Bigl(\int_a^{a+\varepsilon}|u^*|^p+\varepsilon^p\int_a^{a+\varepsilon}|u'|^p\Bigr),$$
which at $p=1$ is the unsquared inequality $\varepsilon|u^*(a)|\le\int_a^{a+\varepsilon}|u^*|+\varepsilon\int_a^{a+\varepsilon}|u'|$ since $2^{0}=1$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded open interval $I=(a,b)$; an exponent $1\le p<\infty$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and a class $u\in W^{1,p}(I;\mathbb K)$ with weak derivative class $u'=Du$.

[F1] Assume the Axiom of Choice, used through the Countable-Choice and Dependent-Choice interfaces for the ACL reconstruction. For open $\Omega\subseteq\mathbb R^n$, $1\le p<\infty$: a class lies in $W^{1,p}(\Omega;\mathbb K)$ exactly when it lies in $L^p(\Omega;\mathbb K)$ and has one measurable ACL representative whose classical coordinate derivatives exist almost everywhere, are measurable and lie in $L^p$; in that case the classical derivative represents $D_iu$ almost everywhere. ([[thm-acl-characterisation-of-w-one-p]])

[F2] Assume the Axiom of Choice. For a nonempty open interval $I\subseteq\mathbb R$ and $1\le p\le\infty$, every class $u\in W^{1,p}(I;\mathbb K)$ has exactly one continuous locally absolutely continuous representative $u^*$ satisfying $u^*(x)-u^*(y)=\int_y^xu'$ for all $x,y\in I$; if $I=(a,b)$ is bounded then $u'=Du\in L^1(a,b)$ and $u^*$ extends uniquely to an absolutely continuous function on $[a,b]$ with $u^*(x)=u^*(a)+\int_a^xu'$ for every $x\in[a,b]$. ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[def-axiom-of-choice]])

[F3] $W^{1,p}(I;\mathbb K)$ consists of the $L^p$ classes whose first weak derivative class $u'=D^1u$ lies in $L^p(I;\mathbb K)$; the weak derivative is a class, and equalities between weak derivatives are equalities almost everywhere. ([[def-sobolev-space-wkp-and-its-norm]])

[F4] Holder's inequality: for conjugate exponents $p,p'$ and measurable $\varphi,\psi$ with $\varphi\in\mathcal L^p$, $\psi\in\mathcal L^{p'}$, $\int|\varphi\psi|\le\|\varphi\|_p\|\psi\|_{p'}$, so $\varphi\psi$ is integrable; applied to $\varphi=|u'|$ and $\psi=\mathbf 1_{(a,a+\varepsilon)}$ this gives $\int_a^{a+\varepsilon}|u'|\le\varepsilon^{1-1/p}\|u'\|_{L^p(a,a+\varepsilon)}$. ([[thm-holder-inequality-for-integrals]])

## Proof

**Proof technique:** direct.

1.1 The fundamental-theorem identity and its immediate consequence. By [F2] the representative $u^*$ is absolutely continuous on the compact interval $[a,a+\varepsilon]\subseteq[a,b]$ and $u^*(t)-u^*(a)=\int_a^tu'$ for every $t\in[a,a+\varepsilon]$, so $u^*(a)-u^*(t)=-\int_a^tu'$ and therefore $|u^*(a)|\le|u^*(t)|+\int_a^{t}|u'|\le|u^*(t)|+\int_a^{a+\varepsilon}|u'|$ for every $t\in[a,a+\varepsilon]$. [F2, F3, algebra, given]

2.1 The case $p=1$. Integrating the pointwise inequality of step 1.1 over $t\in(a,a+\varepsilon)$ and dividing by $\varepsilon>0$ gives $|u^*(a)|\le\varepsilon^{-1}\int_a^{a+\varepsilon}|u^*|+\int_a^{a+\varepsilon}|u'|$, which is (ii) at the left endpoint. [step 1.1, F4, algebra]

2.2 The case $1<p<\infty$. Raising the pointwise inequality of step 1.1 to the $p$-th power and using $|x+y|^p\le2^{p-1}(|x|^p+|y|^p)$ gives $|u^*(a)|^p\le2^{p-1}(|u^*(t)|^p+\bigl(\int_a^{a+\varepsilon}|u'|\bigr)^p)$ for every $t\in(a,a+\varepsilon)$. Integrating in $t$ and dividing by $\varepsilon$ yields $|u^*(a)|^p\le2^{p-1}\bigl(\varepsilon^{-1}\int_a^{a+\varepsilon}|u^*|^p+\bigl(\int_a^{a+\varepsilon}|u'|\bigr)^p\bigr)$, and Holder's inequality [F4] converts the last term into $\bigl(\int_a^{a+\varepsilon}|u'|\bigr)^p\le\varepsilon^{p-1}\int_a^{a+\varepsilon}|u'|^p$. This is (i) at the left endpoint. [F4, step 1.1, algebra]

3.1 The right endpoint. Put $\tilde u(t):=u(a+b-t)$ for $t\in I$; then $t\mapsto u^*(a+b-t)$ is an absolutely continuous representative of $\tilde u$ whose classical derivative exists almost everywhere and equals $-u'(a+b-t)\in L^p(I)$ (the weak derivative class of $\tilde u$, by the classical chain rule and [F1]), so $\tilde u\in W^{1,p}(I;\mathbb K)$ with weak derivative $-u'(a+b-\cdot)$, and its absolutely continuous representative takes the value $u^*(b)$ at $t=a$. Applying steps 2.1 and 2.2 to $\tilde u$ on $(a,a+\varepsilon)$ gives the same inequalities with $u^*(b)$ on the left and the integrals over $(b-\varepsilon,b)$ on the right, because $\tilde u$ and its weak derivative on $(a,a+\varepsilon)$ correspond to $u^*$ and $u'$ on $(b-\varepsilon,b)$ under the reflection. [F1, F2, step 2.1, step 2.2, algebra]

4.1 Representative independence and the multiplied form. If $v$ is another representative of the class that is absolutely continuous on compact subintervals, then $v-u^*$ is constant by [F2]'s identity for both representatives with the same weak derivative class; since $v=u^*$ almost everywhere that constant is $0$ (the interval is nonempty), so the endpoint values of the absolutely continuous representative are determined by the class of $u$. Multiplying (i) and (ii) by $\varepsilon$ gives the displayed $C_p$-form $\varepsilon|u^*(a)|^p\le2^{p-1}(\int_a^{a+\varepsilon}|u^*|^p+\varepsilon^p\int_a^{a+\varepsilon}|u'|^p)$, which at $p=1$ reads $\varepsilon|u^*(a)|\le\int_a^{a+\varepsilon}|u^*|+\varepsilon\int_a^{a+\varepsilon}|u'|$. [F2, step 2.1, step 2.2, step 3.1, algebra] ∎

## Source notes

Laugesen, Theorem 3.14, Step 1 (printed p. 63), Hunter's proof of Theorem 3.44 (printed p. 72), and Teschl's proof of Lemma 9.21 (printed p. 210) each use the one-variable fundamental-theorem argument in the normal direction that is isolated here; the Holder step converting $\int|u'|$ into the $L^p$ term is the standard form of the estimate. The Axiom of Choice is carried only through the ACL and absolutely-continuous-representative interfaces [F1] and [F2].
