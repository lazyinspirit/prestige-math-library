---
id: ex-second-main-theorem-with-no-inducing-local-block
kind: example
title: A p-section with no local block inducing to the chosen global block
status: published
origin: pipeline
deps: [ex-p-sections-and-brauer-subsections-in-a-small-finite-group, lem-block-idempotents-lift-uniquely-from-kh-to-oh, thm-blocks-partition-ordinary-and-brauer-irreducible-characters, thm-brauer-second-main-theorem, def-algebraically-closed-field, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, Example 4.25 and Theorem 5.4, pp. 274–277"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
    - title: "Meierfrankenfeld, MTH 912 Class Notes, Theorem 6.7.15, pp. 169–171"
      url: "https://web.archive.org/web/20220618221643id_/https://users.math.msu.edu/users/meierfra/Classnotes/MTH912F04/912F04master.pdf"
---

## Example

Assume the Axiom of Choice. Let $G=S_3$, $p=2$, and work over a splitting
$2$-modular system whose residue field is algebraically closed. Let $B_1$ be
the defect-zero block containing the ordinary degree-two character
$\chi_{\mathrm{std}}$, and let $t$ be a transposition. The centralizer
$C_G(t)=\langle t\rangle$ has one block $c$, and it induces to the principal
block $B_0$, not to $B_1$. Thus no local block over this $2$-section induces
to $B_1$. If $\varphi$ is the unique local irreducible Brauer character,
then
$$  d^t_{\chi_{\mathrm{std}},\varphi}=0, \qquad \chi_{\mathrm{std}}(t)=0.$$

## Facts & Assumptions

**Given:** AC, the algebraically closed splitting system, $S_3$, its two
blocks in characteristic $2$, and the transposition in the Example.

[F1] The preceding example gives the two blocks $B_0,B_1$, with $B_0$
principal and $B_1$ of defect zero, and gives $C_G(t)=\langle t\rangle$,
its sole block $c$, and $c^G=B_0$
([[ex-p-sections-and-brauer-subsections-in-a-small-finite-group]]).

[F2] Block idempotents lift uniquely from $kG$ to $\mathcal OG$, and ordinary
irreducible characters have unique block membership
([[lem-block-idempotents-lift-uniquely-from-kh-to-oh]] and
[[thm-blocks-partition-ordinary-and-brauer-irreducible-characters]]).

[F3] Brauer's Second Main Theorem restricts a generalized expansion to local
blocks inducing to the row's global block
([[thm-brauer-second-main-theorem]]), under the algebraically closed and AC
hypotheses ([[def-algebraically-closed-field]] and
[[def-axiom-of-choice]]).

## Verification

1.1 Put $a=(123)$, $C=a+a^2$, and let $T$ be the sum of the three
transpositions. The center of $kG$ has basis $1,T,C$, and in characteristic
$2$ one directly obtains $T^2=1+C$, $C^2=C$, and $TC=0$. Thus its only
nonzero primitive central idempotents are $e=1+C$ and $f=C$. The first acts
as $1$ on the trivial module, so it is the principal block idempotent for
$B_0$; F1 then identifies $f$ with the remaining block $B_1$. In
$\mathcal OG$, the idempotents $\widehat e=(1+a+a^2)/3$ and
$\widehat f=1-\widehat e$ reduce respectively to $e$ and $f$. By uniqueness
in F2 they are the integral block lifts. Let
$$ W=\{(x_1,x_2,x_3)\in K^3:x_1+x_2+x_3=0\} $$
with the coordinate-permutation action. The operator $\widehat e$ averages
over $\langle a\rangle$ and projects onto $W^{\langle a\rangle}$. An
$a$-fixed vector has equal coordinates, and its coordinate sum is $3x_1$,
so $W^{\langle a\rangle}=0$. If a line in $W$ were $G$-stable, the scalar
$\lambda$ by which $a$ acted would satisfy $\lambda^3=1$ and, from
$tat=a^{-1}$, $\lambda=\lambda^{-1}$; hence $\lambda=1$, contrary to
$W^{\langle a\rangle}=0$. Thus $W$ is irreducible and affords
$\chi_{\mathrm{std}}$. Now $\widehat eW=0$ and $\widehat fW=W$, making
$\chi_{\mathrm{std}}$ a row of $B_1$ by F2. [F1, F2, algebra]

2.1 By F1, the only local block over $u=t$ induces to $B_0$, whereas step 1.1 puts the row $\chi_{\mathrm{std}}$ in $B_1$. F3 therefore gives $$d^t_{\chi_{\mathrm{std}},\varphi}=0$$ for every $\varphi\in\operatorname{IBr}(C_G(t),c)$. [F1, F3, step 1.1]

3.1 More explicitly, $kC_G(t)\cong k[X]/((X-1)^2)$ has the single simple quotient $k$, so there is exactly one local irreducible Brauer character $\varphi$, with $\varphi(1)=1$. The only $2$-regular element of $C_G(t)\cong C_2$ is $v=1$. The full generalized-decomposition identity at $tv=t$ therefore is $$ \chi_{\mathrm{std}}(t) =d^t_{\chi_{\mathrm{std}},\varphi}\varphi(1)=0. $$ Equivalently, F3's restricted sum for the block $B_1$ is empty. [F1, F3, step 2.1, algebra]

4.1 There is also a direct characteristic-zero check. On the basis $v_1=(1,-1,0)$, $v_2=(0,1,-1)$ of $W$, the transposition $t=(12)$ satisfies $tv_1=-v_1$ and $tv_2=v_1+v_2$, so its matrix has trace $0$. This agrees with step 3.1. The example is a genuine empty-local-support boundary case; it does not purport to compute a larger generalized-decomposition table. Algebraic closedness and AC are used only through F3 and the preceding AC-stated example. [F3, step 1.1, step 3.1, algebra] ∎
