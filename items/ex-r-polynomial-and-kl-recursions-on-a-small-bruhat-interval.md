---
id: ex-r-polynomial-and-kl-recursions-on-a-small-bruhat-interval
kind: example
title: The $R$- and Kazhdan–Lusztig recursions on a small singular interval
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
- def-bruhat-interval-and-r-polynomials
- thm-r-polynomial-recursion-and-degree-bounds
- thm-kazhdan-lusztig-polynomial-recursion
- def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization
- def-inverse-kazhdan-lusztig-polynomials
- thm-kazhdan-lusztig-inversion-formula
- lem-bruhat-order-basic-properties-for-permutations
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 — §2.2, Definition 2.4: the descent recursion for Kazhdan–Lusztig polynomials and its μ-correction term."
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§2.2, Definition 2.4, printed p. 5 / PDF p. 5; the complete formula and adjoining μ convention were reread."
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters, revised version arXiv:math/0208154v2 — §§4.3–4.9: R-coefficients, recurrence and bounds; §§10.1–10.2: the inverse chain formula and inverse matrices, in the equal-parameter specialization."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§§4.3–4.9, printed pp. 25–27, and §§10.1–10.2, printed pp. 46–47; the complete arguments were reread in the original TeX and translated by v_L=v^{-1}."
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 — §3.2 (printed pp. 15–16): normalized Hecke algebra, bar and KL-basis conventions, and Remark 3.2 with $\\underline H_x=C'_x$ and $h_{y,x}=v^{\\ell(x)-\\ell(y)}P_{y,x}(v^{-2})$."
      url: "https://arxiv.org/pdf/1212.0791"
      locator: "§3.2, printed pp. 15–16; the complete section and displayed formulas were reread."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Facts & Assumptions

**Given:** One-based $S_4$, $b=1324=s_2$, $w=3412=s_2s_1s_3s_2$, and $q=v^{-2}$. Put $\alpha=v-v^{-1}$.

[F1] Bruhat order is graded by inversion length, has the reduced-subword characterization and prefix-rank criterion, and satisfies the lifting implication: if $y\le z$, $sy>y$, and $sz<z$, then $y\le sz$ ([[lem-bruhat-order-basic-properties-for-permutations]]).

[F2] The $R$-coefficient $r_{y,z}$ is defined as the coefficient of $H_y$ in $\overline{H_z}$ ([[def-bruhat-interval-and-r-polynomials]]).

[F3] $P_{y,z}$ has constant term $1$ on comparable pairs, degree at most $(\ell(z)-\ell(y)-1)/2$ for $y<z$, and $p_{y,z}=v^{\ell(z)-\ell(y)}P_{y,z}(v^{-2})$; $\mu$ vanishes for even length differences ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]).

[F4] The KL left descent recursion uses $c=1$ when $sy<y$, with correction indices $y\le u\le sz$ having $su<u$ and $\mu(u,sz)\ne0$ ([[thm-kazhdan-lusztig-polynomial-recursion]]).

[F5] The chain-defined inverse coefficients satisfy $q'_{x,z}=-\sum_{x\le u<z}q'_{x,u}p_{u,z}$ for $x<z$, with diagonal $1$; their matrix is the two-sided inverse of $(p_{x,z})$ ([[def-inverse-kazhdan-lusztig-polynomials]], [[thm-kazhdan-lusztig-inversion-formula]]).

[F9] The $R$-coefficients vanish unless $y\le z$, have diagonal $r_{z,z}=1$, obey the left descent recursion, and have leading and trailing terms $v^{\ell(z)-\ell(y)}$ and $\operatorname{sgn}(y)\operatorname{sgn}(z)v^{-(\ell(z)-\ell(y))}$ on comparable pairs ([[thm-r-polynomial-recursion-and-degree-bounds]]).

## Example

In $S_4$, written in one-line notation, let $b:=s_2=1324$ and $w:=s_2s_1s_3s_2=3412$ (a reduced word of length $4$; the two middle generators commute). (a) The interval $[b,w]$ has exactly ten elements: $1324$; $1342,1423,2314,3124$; $1432,2413,3142,3214$; and $3412$. (b) For comparable pairs in this interval the only Kazhdan–Lusztig polynomial different from $1$ is $P_{b,w}(q)=1+q$; so $\mu(b,w)=1$, and $(b,w)$ is a $\mu$-pair with $\ell(w)-\ell(b)=3>1$: $\mu$-pairs need not be covers. All other $\mu$-pairs inside the interval are covers, and all $r_{y,z}$ for $y,z\in[b,w]$ are the corresponding Laurent polynomials read off from [[thm-r-polynomial-recursion-and-degree-bounds]]. (c) The descent recursion of [[thm-kazhdan-lusztig-polynomial-recursion]] at $y=b$, $w$ and $s=s_2$ (a left descent of $w$, with $sw=2413$ and $sb=1234=\mathrm{id}$, so $c=1$) reads $$P_{b,w}(q)=P_{\mathrm{id},2413}(q)+qP_{b,2413}(q)-\!\!\!\sum_{\substack{b\le z\le 2413\\ s_2z<z,\ \mu(z,2413)\ne0}}\!\!\!\mu(z,2413)\,q^{(4-\ell(z))/2}P_{b,z}(q);$$ the sum is empty because $[b,2413]=\{1324,1423,2314,2413\}$ and its only element with $s_2z<z$ is $1324$, for which $\mu(1324,2413)=0$; since $P_{\mathrm{id},2413}=P_{b,2413}=1$, the recursion returns $P_{b,w}=1+q$, in agreement with (b). (d) The inverse Kazhdan–Lusztig polynomial of [[def-inverse-kazhdan-lusztig-polynomials]] is $q'_{b,w}=-v-v^3$, while $q'_{b,1342}=q'_{b,1423}=q'_{b,2314}=q'_{b,3124}=-v$ and $q'_{b,1432}=q'_{b,2413}=q'_{b,3142}=q'_{b,3214}=v^2$; the matrix identity $\sum_zq'_{x,z}p_{z,w}=\delta_{x,w}$ of [[thm-kazhdan-lusztig-inversion-formula]] holds on the ten-point interval. In particular the inverse coefficients are not all nonnegative even though all $p_{y,z}$ are.

## Verification

1.1 **The full interval.** The displayed word for $w$ has inversion length $4$, so it is reduced. Its reduced subwords of lengths $0,1,2,3,4$ give respectively $1234$; $1324,2134,1243$; $1342,1423,2314,3124,2143$; $1432,2413,3142,3214$; and $3412$. The four excluded elements $1234,2134,1243,2143$ have no reduced subword $s_2$, so they are not above $b$; the other ten are. For an explicit order check, write $a=1342=s_2s_3$, $c=1423=s_3s_2$, $d=2314=s_1s_2$, $f=3124=s_2s_1$, and $A=1432=s_2s_3s_2$, $C=2413=s_1s_3s_2$, $D=3142=s_2s_1s_3$, $F=3214=s_2s_1s_2$. The reduced-subword criterion gives the intermediate covers $a<A,D$; $c<A,C$; $d<C,F$; $f<D,F$; each rank-two element is also above $b=s_2$, and each rank-three element is below $w$. These are all cover incidences between adjacent ranks, so all other comparisons are their transitive consequences. [F1, algebra]

2.1 **The correction interval.** Left $s_2$ gives $s_2w=2413$ and $s_2b=1234$. Step 1.1 gives $[b,2413]=\{b,1423,2314,2413\}$. Their left $s_2$ products are respectively $1234,1432,3214,3412$, of lengths $0,3,3,4$, whereas the original lengths are $1,2,2,3$. Thus only $b$ has that descent, and $\mu(b,2413)=0$ by its even length gap. In particular $1342$ is excluded: $R_{1342}(3,2)=1<2=R_{2413}(3,2)$. [F1, F3, step 1.1, algebra]

2.2 **All the $R$-coefficients.** By [F9], noncomparable pairs have $r_{y,z}=0$, diagonal entries are $1$, and every comparable coefficient is nonzero because its leading term is $v^{\ell(z)-\ell(y)}$. For a cover, the degree range and parity in [F9] leave only the terms $v$ and $-v^{-1}$, so $r_{y,z}=\alpha$. For a comparable pair of gap two, induct on $\ell(y)$ and choose a left descent $s$ of $z$. If $sy<y$, the recursion gives $r_{y,z}=r_{sy,sz}$; this coefficient is nonzero, so [F9] implies $sy\le sz$, and induction gives $r_{y,z}=\alpha^2$. If $sy>y$, then $r_{sy,sz}=0$: its indices have equal length, and equality would force $y=z$. By the lifting implication in [F1], $y\le sz$, so the other recursion term is $\alpha r_{y,sz}=\alpha^2$. Thus every gap-two pair in $S_4$ has coefficient $\alpha^2$. The only gap-three pair in $[b,w]$ is $(b,w)$. Since $s_2$ is a left descent of both, $r_{b,w}=r_{1234,2413}$. For $2413$, $s_1$ is a left descent, so $r_{1234,2413}=r_{2134,1423}+\alpha r_{1234,1423}$. The first term is zero because $1423=s_3s_2$ has no reduced subword $s_1$; the second is $\alpha\cdot\alpha^2$. Hence $r_{b,w}=\alpha^3=v^3-3v+3v^{-1}-v^{-3}$. This determines every coefficient for pairs in the displayed interval. [F1, F2, F9, step 1.1, algebra]

3.1 **The sole nonconstant polynomial.** By [F3], all comparable pairs of gap at most two have $P=1$, so the only possibly nonconstant pair within the interval is $(b,w)$. To evaluate $P_{1234,2413}$, apply [F4] with left $s_1$ to $2413=s_1s_3s_2$, obtaining lower top $s_3s_2=1423$. No element below $1423$ has left $s_1$-descent: its subwords are $1234,1243,1324,1423$, with no inversion between the values $1,2$. Also $s_1\not\le1423$. Hence $P_{1234,2413}=qP_{2134,1423}+P_{1234,1423}=0+1$. Now use [F4] at $(b,w,s_2)$: step 2.1 makes its correction sum empty, $c=1$, and $P_{b,2413}=1$, so $P_{b,w}=1+q$. Therefore $p_{b,w}=v^3+v$ and $\mu(b,w)=1$. Every other comparable distinct pair has $p_{y,z}=v^{\ell(z)-\ell(y)}$, so its nonzero $\mu$ occurs exactly on covers. [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 **Inverse entries and both matrix products.** Step 3.1 gives diagonal $p=1$, cover entries $v$, and gap-two entries $v^2$. Each gap-two interval in step 1.1 has two intermediate elements. Thus [F5] gives inverse entries $1,-v,v^2$ at gaps $0,1,2$. At the sole gap-three pair there are four elements at each intermediate rank, so $q'_{b,w}=-(v^3+v)-4(-v)v^2-4v^2v=-v^3-v$. This gives every entry of the inverse matrix, including every displayed value in part (d). For $Q'P$, the off-diagonal entries at gaps one and two are $-v+v=0$ and $v^2-2v^2+v^2=0$; at gap three the entry is $(v^3+v)-4v^3+4v^3-(v^3+v)=0$. For $PQ'$, these entries are $v-v=0$, $v^2-2v^2+v^2=0$, and $-(v^3+v)+4v^3-4v^3+(v^3+v)=0$. Diagonal entries are $1$ and noncomparable entries are zero by support, so both matrix products are the identity. Although all $p$-entries in this finite example are nonnegative, its cover inverse entries and $q'_{b,w}$ are negative. Every calculation is finite and uses no choice principle. [F1, F3, F5, step 1.1, step 3.1, algebra] ∎
