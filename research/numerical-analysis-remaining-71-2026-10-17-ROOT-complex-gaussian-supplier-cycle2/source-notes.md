# Focused final source retrieval for the complex Gaussian supplier

Scope: source support for the Gaussian planning owner's second and final repair cycle; no independent item review, canonical edits, or acceptance claim.

## Davidson--Szarek full author preprint obtained and read

Author publication index: <https://case.edu/artsci/math/szarek/publications.html>.

Downloaded the linked complete 59-page author preprint, <https://case.edu/artsci/math/szarek/TeX/DavSzaHB.pdf>, retained here as `DavSzaHB.pdf`. Also obtained the author's linked `AddendumDavSza.pdf` and `handbookCorr3.pdf`. The main PDF's Type3 font encoding makes ordinary extraction unreadable; its `.pdf.txt` file is a raw extraction, **not a usable transcript**. Read the actual rendered PDF pages 39--44 visually. The addendum and 2019 corrigendum have readable extraction and were read.

Section IIc, printed p.39, introduces results for "some symmetric Gaussian random matrices (in particular all real Gaussian matrices considered here)." Theorem II.13, p.42, explicitly requires real independent Gaussian matrix entries. Its comparison proof is the real tensor argument.

Crucially, printed p.43 states:

> The arguments of this section can be modified to treat other classes of real matrices, even if the outcomes may be less elegant. It would be nice and potentially very fruitful to find an approach to the complex case(s) that is based on similar ideas.

It then describes complex matrices as real block matrices with special structure, displaying the realification

`(1/sqrt(2)) [[G,-G'];[G',G]]`

for independent real Gaussian G,G'. It identifies operator spaces as the proper context. It supplies **no phase-correct comparison proof** giving the needed complex product constant. Neither retrieved corrigendum adds such a proof.

This resolves one source avenue decisively: the HMT-cited Davidson--Szarek section is not a full proof source for the missing normalized-complex sharp supplier.

## Original Chevet full text obtained and relevant proof read

Retrieved <https://www.numdam.org/item/SAF_1977-1978____A14_0.pdf>, retained as `chevet1978.pdf`, with readable though formula-imperfect extraction `chevet1978.txt`.

This is S. Chevet, "Séries de variables aléatoires gaussiennes à valeurs dans E tensor_epsilon F. Application aux produits d'espaces de Wiener abstraits", Séminaire Maurey--Schwartz 1977--1978, exposé XIX. Read introductory conventions and the comparison theorem, and read Lemma (3.1) and its actual proof on printed XIX.4--XIX.6, including rendered formula pages.

The conventions use independent real `N(0,1)` variables. Lemma (3.1)(2) gives an upper bound `sqrt(2) A_p`, where A_p is the sum of the two weak-ell2/Gaussian-norm products. On XIX.6 the proof explicitly uses

`|uv-u'v'|^2 <= 2 |(u-u')v|^2 + 2 |(v-v')u'|^2`

and applies Sudakov--Fernique with a `sqrt(2)`-scaled comparison process. Thus this source proves a useful non-sharp Chevet bound and does not discharge the requested sharp complex constant-one supplier. Merely citing "Chevet inequality" would conceal this distinction.

## Other requested source avenues

The current author-hosted Ledoux books page was inspected at <https://perso.math.univ-toulouse.fr/ledoux/books/>. Its Probability in Banach Spaces entry links bibliographic information, an erratum, and a review; it does not expose the required full book section. No reading of Ledoux--Talagrand section 3.3 is claimed.

Crossref confirms Gordon's 1985 paper DOI is `10.1007/BF02759761` (the final digits matter). Its correct Springer PDF endpoint still returned a client-challenge HTML page. OpenAlex listed only the publisher location. Gordon's 1988 paper DOI is `10.1214/aop/1176991893`; the attempted Project Euclid PDF endpoint likewise did not yield a PDF. No reading of either Gordon full text is claimed.

## Handoff

No newly retrieved source supplied the missing sharp complex product proof or an alternative proof of the exact approved complex rangefinder expectation. The Davidson--Szarek remark explicitly addresses the complex-phase obstacle and confirms why its real proof cannot simply be imported. The original Chevet proof pays a sqrt(2) factor. These are source findings, not a counterexample to the target inequality or a declaration that the target is an open problem.
