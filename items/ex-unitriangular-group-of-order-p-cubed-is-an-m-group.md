---
id: ex-unitriangular-group-of-order-p-cubed-is-an-m-group
kind: example
title: "The order-$p^{3}$ unitriangular group is an M-group"
status: draft
origin: pipeline
deps: ["def-monomial-representation-and-m-group", "thm-clifford-correspondence", "cor-the-regular-character-gives-the-sum-of-squares-formula", "def-heisenberg-group-of-order-p-cubed", "prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed", "def-conjugate-representation-and-inertia-group", "thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional", "cor-cyclotomic-field-splits-a-finite-group", "thm-complex-nth-roots-and-roots-of-unity", "thm-z-mod-p-is-a-field"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Paul Garrett, Heisenberg groups over finite fields, §§1–2, PDF pp. 1–3"
      url: "https://www-users.cse.umn.edu/~garrett/m/repns/notes_2014-15/05_finite_heisenberg_ssw.pdf"
    - title: "Tammo tom Dieck, Representation Theory — (4.2.4)–(4.2.7), printed pp. 55–57; §4.3, printed pp. 57–59"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
proof_strategy: direct
---

## Example

Let $p$ be a prime and let
$$ U\;=\;H_p\;=\;\operatorname{UT}_3(\mathbb Z/p)\;=\;\{(x,y,z):x,y,z\in\mathbb Z/p\} $$
be the Heisenberg group of order $p^3$ of
[[def-heisenberg-group-of-order-p-cubed]], with the multiplication
$(x,y,z)(x',y',z')=(x+x',y+y',z+z'+xy')$ of
[[prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed]];
these triples are the unipotent upper triangular matrices over $\mathbb Z/p$.
Then $U$ has **exactly $p^2$ linear characters and exactly $p-1$ irreducible
characters of degree $p$**, and every one of them is monomial:

- the $p^2$ linear characters are $\chi_{a,b}(x,y,z)=\omega^{ax+by}$
  ($\omega=\exp(2\pi i/p)$), which are the characters of the abelian quotient
  $U/Z$ for the central subgroup $Z=\{(0,0,z)\}$, and each is induced from $U$
  itself;
- the $p-1$ characters of degree $p$ are
  $\Theta_{c,d}=\operatorname{Ind}_H^U\mu_{c,d}$ for the abelian subgroup
  $H=\{(0,y,z)\}$ of index $p$ and the linear characters $\mu_{c,d}$ of $H$
  with $c\in\mathbb Z/p$ and $d\in(\mathbb Z/p)^\times$, namely
  $\mu_{c,d}(0,y,z)=\omega^{cy+dz}$; these are precisely the linear characters
  of $H$ that are nontrivial on the centre $Z$, and the inertia group of each of
  them is $H$.

Consequently every irreducible character of $U$ is monomial, so $U$ is an
$M$-group; this holds for every prime $p$, including $p=2$.

## Facts & Assumptions

**Given:** A prime $p$, the Heisenberg group $U=H_p=\{(x,y,z):x,y,z\in\mathbb Z/p\}$ with multiplication $(x,y,z)(x',y',z')=(x+x',y+y',z+z'+xy')$, the elements $e_1=(1,0,0)$, $e_2=(0,1,0)$, $e_3=(0,0,1)$, the number $\omega=\exp(2\pi i/p)$, and the subsets $H=\{(0,y,z)\}$ and $Z=\{(0,0,z)\}$.

[F1] $U$ is a group of order $p^3$ with identity $(0,0,0)$, inverse $(x,y,z)^{-1}=(-x,-y,-z+xy)$, and $e_1,e_2,e_3$ generate $U$, each of order $p$; $U$ is nonabelian; the same group is the group of unipotent upper triangular $3\times3$ matrices over $\mathbb Z/p$. ([[def-heisenberg-group-of-order-p-cubed]], [[prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed]]).

[F2] Every irreducible complex representation of a finite abelian group has degree $1$, and $\mathbb C$ is a splitting field for every finite group. ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]], [[cor-cyclotomic-field-splits-a-finite-group]]).

[F3] $\omega$ has order $p$, and the $p$-th roots of unity are $\omega^k$ for $0\le k<p$, pairwise distinct. ([[thm-complex-nth-roots-and-roots-of-unity]]).

[F4] Conjugation of characters is ${}^g\theta(h)=\theta(g^{-1}hg)$; the inertia group $I_G(\theta)=\{g:{}^g\theta=\theta\}$ is a subgroup, and $\operatorname{Irr}(G\mid\theta)$ denotes the irreducible characters of $G$ in which $\theta$ occurs. ([[def-conjugate-representation-and-inertia-group]]).

[F5] Clifford correspondence: for $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$ and $I=I_G(\theta)$, induction is a bijection $\operatorname{Irr}(I\mid\theta)\to\operatorname{Irr}(G\mid\theta)$, and the sets $\operatorname{Irr}(G\mid\theta)$ over distinct $G$-orbits in $\operatorname{Irr}(N)$ partition $\operatorname{Irr}(G)$. ([[thm-clifford-correspondence]]).

[F6] $\sum_{\chi\in\operatorname{Irr}(G)}\chi(1)^2=|G|$ for every finite group $G$. ([[cor-the-regular-character-gives-the-sum-of-squares-formula]]).

[F7] A character is monomial if it is induced from a linear character of a subgroup, and a finite group is a monomial group ($M$-group) if all its irreducible complex characters are monomial. ([[def-monomial-representation-and-m-group]]).

[F8] $\mathbb Z/p$ is a field, so $d\ne0$ implies $dx=0$ only for $x=0$. ([[thm-z-mod-p-is-a-field]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] the set $U$ with the displayed multiplication is a group of order $p^3$, its identity is $(0,0,0)$, its inverses are $(x,y,z)^{-1}=(-x,-y,-z+xy)$, and $e_1,e_2,e_3$ generate $U$ with $e_1^p=e_2^p=e_3^p=1$. [F1, given]

2.1 $H=\{(0,y,z)\}$ is a subgroup: for $(0,y,z),(0,y',z')\in H$ the product is $(0,y+y',z+z'+0\cdot y')=(0,y+y',z+z')\in H$, and for $h=(0,y,z)$ the inverse computed from the formula of step 1.1 is $(0,-y,-z)$ (since $(-0,-y,-z+0\cdot y)=(0,-y,-z)$), which lies in $H$; so $H$ is closed under products and inverses, and $|H|=p^2$ because $y,z$ range over $\mathbb Z/p$. The subset $Z=\{(0,0,z)\}$ is contained in $H$ and has $|Z|=p$. [F1, step 1.1]

2.2 For $(a,b)\in(\mathbb Z/p)^2$ define $\chi_{a,b}(x,y,z):=\omega^{ax+by}$. This is well defined on the triple $(x,y,z)\in U$, and it is a homomorphism: by step 1.1 the first two coordinates of a product add, so $\chi_{a,b}\bigl((x,y,z)(x',y',z')\bigr)=\omega^{a(x+x')+b(y+y')}=\chi_{a,b}(x,y,z)\chi_{a,b}(x',y',z')$. Different pairs give different characters, because $\chi_{a,b}(e_1)=\omega^{a}$ and $\chi_{a,b}(e_2)=\omega^{b}$ determine $a,b$ by the distinctness of the powers of $\omega$ in [F3]. Hence $U$ has at least $p^2$ characters of degree $1$; each of them is an irreducible character of $U$ and, being a linear character of the subgroup $U$ itself, is monomial in the sense of [F7]: in the covariant-function model, evaluation at $1$ identifies $\operatorname{Ind}_U^U\chi_{a,b}$ with its one-dimensional space, with inverse $v\mapsto(g\mapsto\chi_{a,b}(g)^{-1}v)$. [F3, F7, step 1.1]

3.1 Characters of $H$: for $(c,d)\in(\mathbb Z/p)^2$ define $\mu_{c,d}(0,y,z):=\omega^{cy+dz}$. Each $\mu_{c,d}$ is a homomorphism, because the coordinates of $H$ multiply by adding by step 2.1: $\mu_{c,d}\bigl((0,y,z)(0,y',z')\bigr)=\omega^{c(y+y')+d(z+z')}=\mu_{c,d}(0,y,z)\mu_{c,d}(0,y',z')$. The $p^2$ characters $\mu_{c,d}$ are pairwise distinct, since $\mu_{c,d}(0,1,0)=\omega^{c}$ and $\mu_{c,d}(0,0,1)=\omega^{d}$ are determined by $(c,d)$ by [F3]. Since the abelian group $H$ has only one-dimensional irreducible complex characters by [F2], and every such character is a homomorphism determined by its two values on $(0,1,0)$ and $(0,0,1)$, each of which is a $p$-th root of unity by [F3], there are exactly $p^2$ of them, so $$\operatorname{Irr}(H)=\{\mu_{c,d}:(c,d)\in(\mathbb Z/p)^2\}.$$ Moreover $\mu_{c,d}(Z)=1$ exactly when $d=0$. [F2, F3, step 2.1]

3.2 Conjugation formula: for $u=(x,y,z)\in U$ and $h=(0,s,t)\in H$ one has $uhu^{-1}=(0,s,t+xs)$. Indeed $uh=(x,y+s,z+t+xs)$ by the multiplication law, and multiplying by the inverse $u^{-1}=(-x,-y,-z+xy)$ from step 1.1 gives first coordinate $x-x=0$, second coordinate $(y+s)-y=s$, and third coordinate $(z+t+xs)+(-z+xy)+x(-y)=t+xs$. This formula gives $uHu^{-1}=H$, so $H$ is normal. An element $(x,y,z)$ commuting with $e_2$ must have $x=0$ by this formula; comparison of its products with $e_1$ then forces $y=0$. Conversely every $(0,0,z)$ commutes with all triples by the multiplication law. Thus $Z$ is exactly the centre, and $(x,y,z)Z\mapsto(x,y)$ identifies $U/Z$ with the additive group $(\mathbb Z/p)^2$. [F1, step 1.1, step 2.1]

4.1 The action of $U$ on $\operatorname{Irr}(H)$: by the definition [F4] and step 3.2, $({}^u\mu_{c,d})(0,s,t)=\mu_{c,d}\bigl(u^{-1}(0,s,t)u\bigr)=\mu_{c,d}(0,s,t-xs)=\omega^{cs+d(t-xs)}=\mu_{c-dx,d}(0,s,t)$ for every $(0,s,t)\in H$, where $u=(x,y,z)$. Since characters are determined by their values, $${}^u\mu_{c,d}=\mu_{c-dx,d}.$$ [F4, step 3.1, step 3.2]

5.1 Orbits and inertia groups. Fix $(c,d)$ and let $u$ run over $U$, so that $x$ runs over $\mathbb Z/p$ while the remaining coordinates are arbitrary. If $d\ne0$, then $x\mapsto c-dx$ is injective by [F8] on the $p$-element set $\mathbb Z/p$, hence bijective, and the orbit of $\mu_{c,d}$ is $\{\mu_{c',d}:c'\in\mathbb Z/p\}$, of size $p$; the stabilizer is $\{u:x=0\}=H$ by step 3.2, so $I_U(\mu_{c,d})=H$. If $d=0$, then ${}^u\mu_{c,0}=\mu_{c,0}$ for all $u\in U$ by step 4.1, so $I_U(\mu_{c,0})=U$. Hence the $p(p-1)$ characters $\mu_{c,d}$ with $d\ne0$ split into $p-1$ orbits of size $p$ (the sets with a fixed $d\ne0$), and the $p$ characters with $d=0$ are fixed points. [F4, F8, step 3.1, step 4.1]

6.1 Characters of degree $p$. Let $d\ne0$ and let $\theta=\mu_{c,d}$; by step 5.1 its inertia group is $I_U(\theta)=H$. Since $H$ is abelian with irreducible characters exactly the $\mu_{c,d}$ by step 3.1, the only irreducible character of $H$ lying over $\theta$ is $\theta$ itself, so by the Clifford correspondence [F5] applied to $N=H$ and $\theta$ the set $\operatorname{Irr}(U\mid\theta)$ consists of the single character $\Theta=\operatorname{Ind}_H^U\theta$; in particular $\Theta$ is irreducible, of degree $[U:H]\cdot1=p$ (a covariant function is specified by one scalar at each of the $p$ left-coset representatives), and it is monomial, being the induction of the linear character $\theta$ of the subgroup $H$ by [F7]. This construction is well defined on orbits: the two members of an orbit have the same inertia group and induce isomorphic characters, while distinct orbits have disjoint sets $\operatorname{Irr}(U\mid\cdot)$ by [F5], so the $p-1$ orbits of step 5.1 produce $p-1$ pairwise distinct irreducible characters of $U$, all of degree $p$ and all induced from the abelian subgroup $H$ of index $p$. [F5, F7, step 2.1, step 3.1, step 5.1]

7.1 Completeness. The $p^2$ linear characters $\chi_{a,b}$ of step 2.2 and the $p-1$ characters of degree $p$ of step 6.1 are pairwise distinct irreducible characters of $U$, of degrees $1$ and $p$. Since $\sum_{\chi\in\operatorname{Irr}(U)}\chi(1)^2=|U|=p^3$ by [F6] and by step 1.1, and the sum of squares over the characters listed so far is $$p^2\cdot1^2+(p-1)\cdot p^2=p^2+p^3-p^2=p^3,$$ the list already attains the total: there is no further irreducible character of $U$, and the listed ones are exactly $\operatorname{Irr}(U)$. In particular the $p^2$ linear and the $p-1$ degree-$p$ characters of steps 2.2 and 6.1 are precisely the irreducible characters of $U$. [F6, step 1.1, step 2.2, step 6.1]

8.1 Therefore every irreducible complex character of $U$ is monomial: the $p^2$ linear characters are induced from $U$ itself by step 2.2, and the $p-1$ characters of degree $p$ are induced from the linear character $\mu_{c,d}$ of the abelian subgroup $H$ of index $p$ by step 6.1. By the definition [F7] the group $U=\operatorname{UT}_3(\mathbb Z/p)=H_p$ of order $p^3$ is an $M$-group, with exactly $p^2$ linear characters and exactly $p-1$ irreducibles of degree $p$. [F7, step 2.2, step 6.1, step 7.1]

9.1 The example is verified: for every prime $p$, including $p=2$, the Heisenberg group $U=H_p=\operatorname{UT}_3(\mathbb Z/p)$ has exactly $p^2$ linear characters, namely the $\chi_{a,b}$, and exactly $p-1$ irreducible characters of degree $p$, namely the $\operatorname{Ind}_H^U\mu_{c,d}$ with $d\ne0$; the linear characters are induced from $U$ itself, of index $1$, and the degree-$p$ characters are induced from the abelian subgroup $H$, of index $p$, so $U$ is an $M$-group. [step 2.2, step 6.1, step 7.1, step 8.1] ∎
