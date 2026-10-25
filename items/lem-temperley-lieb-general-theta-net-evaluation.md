---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-temperley-lieb-general-theta-net-evaluation.json
  precheck: pass
id: lem-temperley-lieb-general-theta-net-evaluation
kind: lemma
title: "General Temperley–Lieb theta-net evaluation and its root domain"
status: published
dependency_level: 5
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - lem-temperley-lieb-closure-trace-component-identities
  - def-temperley-lieb-closure-trace-and-partial-trace
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - lem-temperley-lieb-generators-satisfy-local-relations
  - thm-temperley-lieb-diagram-generators-span
  - thm-temperley-lieb-presentation-isomorphism
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "Sections 2.3–2.4 and 3.1–3.2, printed pp. 12–23/PDF pp. 20–31: JW projectors, precise trivalent vertex, and theta formula. Theorem 3.2.3 states the formula without proof; the independent finite matrix-contraction and q-Vandermonde proof is supplied here. Section 5.3, printed pp. 41–42/PDF pp. 49–50: retained-root domain and vanishing criterion."
---

## Statement

Initially let $q$ be an indeterminate, let $[j]=q^{j-1}+q^{j-3}+\cdots+q^{1-j}$ for $j\ge1$, let $[0]!=1$, and set $\delta=q+q^{-1}$. For nonnegative integers $m,n,p$, put
$$r=m+p,\qquad s=m+n,\qquad t=n+p,\qquad h=m+n+p.$$
Equivalently, $(r,s,t)$ satisfies the triangle inequalities and even-sum condition, with $m=(r+s-t)/2$, $n=(s+t-r)/2$, and $p=(t+r-s)/2$. All Jones–Wenzl projectors below have identity coefficient one and are unnormalized.

Let $W_m:0\to2m$ be $m$ nested cups, whose outputs are two consecutive $m$-strand bundles: cup $i$ joins position $i$ of the first bundle to position $m+1-i$ of the second. Let $B_m:2m\to0$ be its horizontal reflection. Define
$$A=1_p\otimes W_m\otimes1_n:t\longrightarrow r+s,\qquad B=1_p\otimes B_m\otimes1_n:r+s\longrightarrow t,$$
$$\alpha=(p_r\otimes p_s)Ap_t,\qquad \beta=p_tB(p_r\otimes p_s),\qquad \Theta(m,n,p)=\operatorname{Tr}_t(\beta\alpha).$$
Thus the pairwise bundles at each trivalent vertex have sizes $m,n,p$: there are $m$ strands between arms $r,s$, $n$ between arms $s,t$, and $p$ between arms $t,r$. This fixes the vertex without a further scalar normalization. The theta net has the three JW-labelled edges $r,s,t$, since idempotence collapses the doubled projectors. Its value is
$$\Theta(m,n,p)=\frac{[m]![n]![p]![h+1]!}{[m+n]![n+p]![m+p]!}.$$
For $p\ge1$ the closed-diagram strip recurrence is
$$[m+p][n+p]\Theta(m,n,p)=[p][m+n+p+1]\Theta(m,n,p-1),\qquad \Theta(m,n,0)=[m+n+1].$$

These identities specialize to every complex $q\ne0$ for which $[j]\ne0$ for $1\le j\le M=\max(r,s,t)$, using the Laurent-polynomial convention at $q=\pm1$. These hypotheses construct the three projectors and make every displayed denominator a unit; $[h+1]$ need not be nonzero. In particular, if $q=e^{\pi i/\ell}$, $\ell\ge3$, and $0\le r,s,t\le\ell-2$, then $\Theta>0$ when $h\le\ell-2$, whereas $\Theta=0$ when $h\ge\ell-1$. The latter vertex has zero trace pairing against every reverse morphism. No undefined higher root projector or $0/0$ convention is used.

## Facts & Assumptions

**Given:** The stated $m,n,p,r,s,t,h$, the positive-loop diagram convention, the nested cup/cap maps $W_m,B_m$, the unnormalized closure trace, and initially the field $\mathbb C(q)$. For the specialization conclusion, $q\in\mathbb C^\times$ and $[1],\ldots,[M]$ are nonzero. The proof uses only finite matrices and finite diagram contractions; it assumes no quantum-group ribbon or tilting theorem and no choice principle.

[F1] Quantum integers satisfy $[0]_\delta=0$, $[1]_\delta=1$, and $[j+1]_\delta=\delta[j]_\delta-[j-1]_\delta$. For $\delta=q+q^{-1}$ the convention at $q=\pm1$ is $[j]_q=jq^{j-1}$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]], Definition).

[F2] The JW projector has “coefficient $1$ on the identity diagram,” is nonzero and idempotent, and is annihilated on both sides by the elementary generators. Its corner is $p_a\mathrm{TL}_ap_a=\mathbb C(q)p_a$, and $\operatorname{Tr}_a(p_a)=[a+1]$ ([[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]], Statement). For $a\ge1$, its defining recursion is $p_{a+1}=P_a-([a]/[a+1])P_aU_aP_a$ with $P_a=p_a\otimes1$. The initial values are $p_0=1_0$, $p_1=1_1$; the construction uses only the stated unit denominator quantum integers ([[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators]], Definition).

[F3] A diagram is a noncrossing perfect matching. Stacking removes each closed cycle for a factor equal to the loop value and leaves the exterior matching; composition and horizontal juxtaposition extend bilinearly and form a strict monoidal category ([[def-temperley-lieb-diagram-category]], Definition; [[thm-temperley-lieb-diagram-category-laws]], Statement).

[F4] The elementary cup-cap generators satisfy $U_i^2=\delta U_i$, $U_iU_{i+1}U_i=U_i$, $U_{i+1}U_iU_{i+1}=U_{i+1}$, and distant commutation ([[lem-temperley-lieb-generators-satisfy-local-relations]], Statement).

[F5] Every basis endomorphism diagram is a finite product of elementary generators; the product can be chosen without an intermediate closed cycle ([[thm-temperley-lieb-diagram-generators-span]], Statement).

[F6] Closing a basis diagram with $c$ circles has value $\delta^c$, and this extends linearly. Closure is cyclic and factors through the stated cup/cap partial trace, with no division by the loop value ([[def-temperley-lieb-closure-trace-and-partial-trace]], Definition; [[lem-temperley-lieb-closure-trace-component-identities]], Statement).

[F7] “The homomorphism $\pi_n:P_n(R,\delta)\to\mathrm{TL}_n(R,\delta)$ sending $u_i$ to $d_i$ is an isomorphism.” This holds for every commutative ring, without requiring the loop value to be nonzero or invertible ([[thm-temperley-lieb-presentation-isomorphism]], Statement).

## Proof
 **Proof technique:** evaluate the defined diagram by an explicit JW matrix contraction, prove the resulting finite q-Vandermonde sum, and then specialize only the final localization identity.

1.1 Work first over $\mathbb C(q)$. Let $V$ have ordered basis $(+, -)$, and define $w=+- -q^{-1}(-+)$ and $b(+,-)=-q$, $b(-,+)=1$, $b(+,+)=b(-,-)=0$. Direct evaluation on $+$ and $-$ gives both snakes $(1\otimes b)(w\otimes1)=1_V$ and $(b\otimes1)(1\otimes w)=1_V$, while $b(w)=-\delta$. Thus cup $\mapsto w$, cap $\mapsto b$ evaluates every planar diagram with loop $-\delta$: the two snake moves and deletion of a component have exactly their prescribed values, so the evaluation respects stacking and planar matching equality. This is a finite matrix evaluation of $\mathcal{TL}(-\delta)$, with no quantum-group input. [F3, F6, given, construct, algebra]

2.1 Write $e=wb$ and $U=-e$. In the two weight-zero words the nonzero block is $U|_{(+-, -+)}=\begin{pmatrix}q&-1\\-1&q^{-1}\end{pmatrix}$, which is symmetric under ordinary transpose. The generators $-e_i$ satisfy the positive-loop relations by the two snakes and $e_i^2=-\delta e_i$; consequently [F7] makes $U_i\mapsto-e_i$ an algebra isomorphism between the positive- and negative-loop diagram endomorphism algebras, with its own inverse of the same form. [F4, F7, step 1.1, algebra]

3.1 Under loop $-\delta$, the quantum integers are $[j]_- =(-1)^{j-1}[j]$, by the recurrence in [F1]. Substitution in the JW recursion shows inductively that the isomorphism takes the positive projector $p_a$ to the negative-loop projector $p_a^-$. Its evaluated matrix $P_a$ is therefore the positive-loop JW recursion matrix built from the displayed symmetric $U$: it is symmetric, idempotent, annihilated by every $U_i$, and is identity plus nonempty $U$-words. [F1, F2, F5, step 2.1, algebra]

4.1 For a word $x$ of length $a$, let $j(x)$ count its minus signs, and let $\operatorname{inv}(x)$ count pairs consisting of a minus before a plus. Put $z_{a,j}=\sum_{j(x)=j}q^{\operatorname{inv}(x)}x$ and $Z_{a,j}=z_{a,j}^{\mathsf t}z_{a,j}=\sum_{j(x)=j}q^{2\operatorname{inv}(x)}$. The equation $U_iv=0$ says that the coefficient of a word with $-+$ in positions $i,i+1$ is $q$ times the coefficient of the otherwise identical word with $+-$ there. Adjacent swaps connect all words with fixed $j$, and replacing $+-$ by $-+$ increases inversion number by one. Hence the common kernel in that weight space is exactly $\mathbb C(q)z_{a,j}$. The image of $P_a$ lies in the common kernel; conversely its nonidentity generator words kill that kernel by their rightmost factor, so $P_a$ acts as identity there. [step 3.1, construct, algebra]

5.1 A symmetric rank-one projector with image $\mathbb C(q)z$ is $zz^{\mathsf t}/(z^{\mathsf t}z)$. Here $Z_{a,j}$ is a nonzero polynomial with constant term one, so it is invertible in $\mathbb C(q)$. Thus the actual JW matrix, rather than a substitute projector, has entries $ (P_a)_{x,y}=\frac{q^{\operatorname{inv}(x)+\operatorname{inv}(y)}}{Z_{a,j}}\quad\text{when }j(x)=j(y)=j. $ This includes $a=0$ with the empty word and $Z_{0,0}=1$. [step 4.1, algebra]

6.1 Put $Q=q^2$ and write $\binom aj_Q$ for the Gaussian polynomial. Appending a plus to a word with $j$ minuses creates $j$ inversions, whereas appending a minus creates none. Therefore $Z_{a,j}=Q^jZ_{a-1,j}+Z_{a-1,j-1}$, with $Z_{a,0}=Z_{a,a}=1$. This is the Gaussian polynomial recurrence with the same initial values; induction gives $Z_{a,j}=\binom aj_Q$. Also $[u]=q^{1-u}(1+Q+\cdots+Q^{u-1})$, so conversion of the three factorials gives $Z_{a,j}=q^{j(a-j)}\frac{[a]!}{[j]![a-j]!}.$ All inversions here occur in $\mathbb C(q)$; root specialization will follow only after denominators have been put in the stated unit range. [F1, step 4.1, algebra, step 5.1]

7.1 The negative planar trace in this evaluation has pivotal matrix $J=-K$, where $K=\operatorname{diag}(q,q^{-1})$. Indeed the bilinear matrix of $b$ is $B_0=\begin{pmatrix}0&-q\\1&0\end{pmatrix}$, and the symmetric planar transpose relation $JB_0^{\mathsf t}=B_0$ gives exactly $J=-K$; equivalently the corresponding direct cup/cap closure of a matrix $f$ is $\operatorname{Tr}((-K)f)$. Tensoring this closure gives $\operatorname{Tr}((-K)^{\otimes a}f)$ on $V^{\otimes a}$. The basis $z_{a,j}$ of $\operatorname{im}P_a$ has weights $a-2j$, so the negative-loop trace is $\dim_-(p_a)=(-1)^a\sum_{j=0}^aq^{a-2j}=(-1)^a[a+1].$ The diagram corner $p_t\operatorname{End}(t)p_t$ is scalar by [F2], also seen directly because an innermost turnback kills every nonidentity matching. The vector $+^t$ is fixed by $P_t$ and detects that scalar. Thus no faithfulness claim about arbitrary diagram Hom spaces is needed to recover the scalar used below. [F2, F3, F6, step 1.1, step 4.1, algebra, step 6.1]

8.1 Form the same $A,B,\alpha,\beta$ in the negative-loop diagram category, and denote the theta value by $\Theta_-$. For a word $x$ of length $m$, let $\bar x$ be its bitwise complement followed by reversal. The prescribed nested cups and caps give $W_m(1)=\sum_x(-q^{-1})^{j(x)}x\otimes\bar x,\qquad B_m(x\otimes\bar x)=(-q)^{m-j(x)},$ and $B_m$ is zero on other pairings of the two word bundles. This follows by multiplying the $m$ fundamental coefficients: a plus in $x$ contributes cup coefficient one and cap coefficient $-q$; a minus contributes cup coefficient $-q^{-1}$ and cap coefficient one. The reversed order is exactly the nesting in the Statement. [step 1.1, given, algebra, step 7.1]

9.1 The negative-loop diagram $\beta\alpha$ is in the scalar $p_t$ corner, so write its evaluated matrix as $LP_t$. On $+^t$ the outer $P_t$ factors may be omitted: they fix this vector, all maps preserve total weight, and weight $t$ in $V^{\otimes t}$ is the one-dimensional space $\mathbb C(q)+^t$. Idempotence removes the doubled middle projectors. Hence $L$ is exactly the coefficient on $+^t$ obtained by applying $B(P_r\otimes P_s)A$ to $+^t$. [F2, step 7.1, step 8.1, algebra]

10.1 Let $x$ have $j$ minus signs and $v=\operatorname{inv}(x)$. Its $A$ output is $(+^px)\otimes(\bar x+^n)$ with coefficient $(-q^{-1})^j$. The two word inversion counts are $v$ and $v+(m-j)n$, since complement followed by reversal preserves inversions. Substitution in the actual projector entries of step 5.1, then summation over words with this fixed $j$, gives $(P_r\otimes P_s)A(+^t)=\sum_{j=0}^m C_j z_{r,j}\otimes z_{s,m-j},\qquad C_j=\frac{(-q^{-1})^j q^{(m-j)n}Z_{m,j}}{Z_{r,j}Z_{s,m-j}}.$ Here the sum of $q^{2v}$ over those words is precisely $Z_{m,j}$. [step 5.1, step 8.1, step 9.1, algebra]

11.1 In applying $B$ to the $j$th tensor in step 10.1, only word pairs $(+^px,\bar x+^n)$ can leave all of its $p$ leftmost and $n$ rightmost through positions plus. Their contraction coefficient on $+^t$ is $(-q)^{m-j}q^{(m-j)n}Z_{m,j}$, by the same inversion count and the cap formula in step 8.1. Therefore every contraction is accounted for in $L=(-1)^m\sum_{j=0}^m q^{m-2j+2n(m-j)}\frac{Z_{m,j}^2}{Z_{m+p,j}Z_{m+n,m-j}}.$ This is an evaluation of the specified bundled, projector-labelled diagram, rather than an asserted strip identity. [step 8.1, step 9.1, step 10.1, algebra]

12.1 Substituting step 6.1 into the quotient of $Z$ factors in step 11.1 contributes exponent $j(n-p)-mn$ and factorial factor $[m]!^2[m+p-j]![n+j]!/([m+p]![m+n]![j]![m-j]!)$. Consequently $L=\frac{(-1)^m[m]!^2}{[m+p]![m+n]!}S_{m,n,p},\qquad S_{m,n,p}=\sum_{j=0}^m q^{m(n+1)-j(n+p+2)}\frac{[m+p-j]![n+j]!}{[j]![m-j]!}.$ The exponent simplification is $m-2j+2n(m-j)+j(n-p)-mn=m(n+1)-j(n+p+2)$, so no omitted scalar or power of $q$ enters this norm contraction. [step 6.1, step 11.1, algebra]

13.1 For $N\ge0$ the formal power series identity $\sum_{j\ge0}\binom{N+j}{j}_Qx^j=\prod_{i=0}^N(1-Q^ix)^{-1}$ follows coefficientwise. If $h_{N,j}$ denotes the right-hand coefficient, multiplying by $1-Q^Nx$ gives $h_{N,j}=h_{N-1,j}+Q^Nh_{N,j-1}$. The Gaussian polynomial on the left has the identical recurrence, since $\binom{N+j}{j}_Q=\binom{N+j-1}{j}_Q+Q^N\binom{N+j-1}{j-1}_Q$, and the initial values are $h_{0,j}=1$ and $h_{N,0}=1$. This Pascal identity follows by clearing the ordinary $Q$-factorial denominators, or by the inversion-word recurrence of step 6.1. Induction thus proves the displayed formal identity; there is no analytic convergence premise. [step 6.1, construct, algebra, step 12.1]

14.1 Apply step 13.1 to the adjacent exponent intervals $[-n-1,-1]$ and $[0,p]$. Their geometric-series products multiply to the product for the whole interval $[-n-1,p]$. The coefficient of $x^m$ is therefore $\sum_{j=0}^m Q^{-j(n+1)}\binom{n+j}{n}_Q\binom{p+m-j}{p}_Q=Q^{-m(n+1)}\binom{m+n+p+1}{m}_Q.$ The summand uses degree $j$ from the negative interval and degree $m-j$ from the nonnegative interval. Shifting all exponents of the combined interval up by $n+1$ and applying step 13.1 with $N=n+p+1$ gives the right side. This proves the finite q-Vandermonde identity used here. [step 13.1, algebra]

15.1 Divide a summand of $S_{m,n,p}$ by $[n]![p]!$. Its factorial part is the product of the symmetric quantum binomials $\begin{bmatrix}m+p-j\\p\end{bmatrix}_q\begin{bmatrix}n+j\\n\end{bmatrix}_q$. Converting these to Gaussian polynomials by step 6.1 changes their combined prefactor to $q^{m(n+1-p)}Q^{-j(n+1)}$. Thus step 14.1 gives the symmetric binomial $q^{-m(n+p+1)}\binom{h+1}{m}_Q=\begin{bmatrix}h+1\\m\end{bmatrix}_q$ after this same conversion, and hence $S_{m,n,p}=\frac{[n]![p]![h+1]!}{[m]![n+p+1]!}.$ Substitution into step 12.1 proves $L=\frac{(-1)^m[m]![n]![p]![h+1]!}{[m+p]![m+n]![n+p+1]!}.$ Every sum and exponent in this evaluation has therefore been derived independently of a theta formula or recoupling coefficient. [step 6.1, step 12.1, step 14.1, algebra]

16.1 The negative diagram satisfies $\Theta_-=(-1)^t[t+1]L$ by step 7.1. To compare it with the desired positive-loop theta, expand all three projectors as generator words. Under $U_i\mapsto-e_i$, a term with a total of $v$ generator insertions gains coefficient sign $(-1)^v$, by step 3.1. With no insertions its closed matching has exactly $h=m+t$ circles: $m$ cup/cap circles and $t$ through-strand closures. One cup-cap insertion reconnects two edges of a closed planar one-manifold and merges two components or splits one; thus it changes the circle count by $\pm1$. Consequently the total count $c$ for a term with $v$ insertions satisfies $c\equiv h+v\pmod2$, including components removed during stacking. Evaluating its loops at $-\delta$ gives sign $(-1)^c$, so its combined sign is always $(-1)^{v+c}=(-1)^h$. Summing the terms proves the diagrammatic identity $\Theta_-=(-1)^h\Theta$, without presupposing a factorial evaluation. [F3, F5, F6, step 3.1, step 7.1, algebra, step 15.1]

17.1 Since $h+t\equiv m\pmod2$, steps 15.1 and 16.1 give $\Theta=(-1)^m[t+1]L=\frac{[m]![n]![p]![h+1]!}{[m+n]![n+p]![m+p]!}.$ At $p=0$ this is $[m+n+1]$, which checks the stated normalization: there is no extra sign, dimension, or scalar at a vertex. [step 15.1, step 16.1, algebra]

18.1 The proved scalar expression gives the cross-multiplied closed-diagram strip identity $[m+p][n+p]\Theta(m,n,p)=[p][m+n+p+1]\Theta(m,n,p-1)$ for $p\ge1$. This is an identity of the specifically defined diagrams' evaluations because steps 1.1–17.1 derived their JW entries, nested cup/cap contractions, exponent factors, and finite sum. A pictorial strip manipulation or the theta recurrence has not been assumed as a premise. Over $\mathbb C(q)$ its unit factors can be divided to give $\Theta(m,n,p)/\Theta(m,n,p-1)=[p][m+n+p+1]/([m+p][n+p])$. Starting with $\Theta(m,n,0)=[m+n+1]$, the product telescopes as $[m+n+1]\prod_{j=1}^p\frac{[j][m+n+j+1]}{[m+j][n+j]}=\frac{[m]![n]![p]![h+1]!}{[m+n]![m+p]![n+p]!}.$ The analogous strip recurrence in $m$ or $n$ follows by relabelling the three bundles or by the proved symmetric expression. [step 17.1, algebra]

19.1 Each JW recursion coefficient is a rational Laurent function with denominators products of $[j]$ for $j\le M=\max(r,s,t)$, by [F2]. The actual theta diagram therefore belongs to the localization $\mathbb Z[q,q^{-1},[1]^{-1},\ldots,[M]^{-1}]$. The right side of step 17.1 is in the same localization, since its only denominators are $[r]![s]![t]!$. Their equality over $\mathbb C(q)$ is consequently an equality in that localization and specializes at every point where these quantum integers are units, even if an intermediate norm formula or a quotient of two theta values has a zero denominator there. This specializes the final identity, rather than dividing a zero theta value at the root. The Laurent-polynomial convention of [F1] also covers $q=\pm1$. [F1, F2, step 17.1, step 18.1, algebra]

20.1 Now let $q=e^{\pi i/\ell}$, $\ell\ge3$, and $0\le r,s,t\le\ell-2$. Every denominator index is at most $\ell-2$, so its quantum integer is nonzero. If $h\le\ell-2$, all numerator indices are at most $\ell-1$, and $[j]=\sin(j\pi/\ell)/\sin(\pi/\ell)>0$ in this range, so $\Theta>0$. If $h\ge\ell-1$, then $[h+1]!$ contains $[\ell]=0$, while the denominator remains nonzero, so $\Theta=0$. This uses no division by $[\ell]$ and no $0/0$ limit, and covers even $\ell$ and $\ell=3$. Labels outside a domain in which their required JW projectors exist are not unqualified root diagrams. [F1, step 19.1, algebra]

21.1 Finally sandwich any matching $t\to r+s$ by $p_t$ and $p_r\otimes p_s$. If an arc joins two points on the same labelled arm, its innermost turnback is killed by that arm's projector. The only remaining noncrossing matching is the stated $m,n,p$-bundled vertex. Thus its projected Hom space is spanned by $\alpha$, and the reverse space by $\beta$, over the root field as well as generically. Their entire trace pairing is scalar multiplication by $\Theta$. Nonzero $\Theta$ makes that vertex pairing nondegenerate; zero $\Theta$ makes the vertex have zero trace pairing against every reverse morphism, including an arbitrary reverse map after inserting the projectors and using cyclicity. This proves the stated root pairing conclusions without dividing by a forbidden-level theta value. Together with steps 17.1 and 18.1–20.1, it proves all claims. [F2, F3, F6, step 17.1, step 18.1, step 19.1, step 20.1, algebra] ∎
## Remarks

Chen's Theorem 3.2.3 explicitly states the theta formula and refers to Kauffman–Lins, Chapter 6, for a proof. The finite projector contraction and geometric-series summation above supply an independent local proof. The generic proof temporarily inverts the nonzero polynomials $Z_{a,j}$; root specialization uses only the final identity in the JW localization. It does not specialize those intermediate norm denominators or normalize a forbidden-level vertex by a vanishing theta value.


The bundled theta schematic below depicts the closure of $\beta\alpha$: the two vertices are the specified cup/cap vertices, and each curve denotes a bundle rather than a single strand. At either vertex the pairwise connections have sizes $m$ between $r,s$, $n$ between $s,t$, and $p$ between $t,r$. Thus the three arm sizes are $r=m+p$, $s=m+n$, and $t=n+p$. A zero-sized bundle is omitted in the actual diagram.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
  \draw (-2,0) .. controls (-2,1.7) and (2,1.7) .. (2,0);
  \draw (-2,0) -- (2,0);
  \draw (-2,0) .. controls (-2,-1.7) and (2,-1.7) .. (2,0);
  \node[draw,fill=white,minimum width=0.65cm,minimum height=0.45cm] at (0,1.275) {$p_r$};
  \node[draw,fill=white,minimum width=0.65cm,minimum height=0.45cm] at (0,0) {$p_t$};
  \node[draw,fill=white,minimum width=0.65cm,minimum height=0.45cm] at (0,-1.275) {$p_s$};
  \fill (-2,0) circle (2pt);
  \fill (2,0) circle (2pt);
  \node[above] at (0,1.6) {$r=m+p$};
  \node[above] at (1,0.1) {$t=n+p$};
  \node[below] at (0,-1.6) {$s=m+n$};
\end{tikzpicture}
```

Here $\alpha:t\to r+s$ and $\beta:r+s\to t$ use $A=1_p\otimes W_m\otimes1_n$ and its reflected cap map $B$, as defined in the Statement. The trace joins their $t$ boundaries; idempotence leaves one projector on each of the three edges, giving $\operatorname{Tr}_t(\beta\alpha)=\Theta(m,n,p)$. The boxes retain identity coefficient one, without vertex or trace normalization. At specialization they are used only in the stated unit-denominator range; no higher root projector is depicted. This schematic explains the construction; the finite contraction proof above is independent of it.
